import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findByEmail } from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT_SECRET no está definido" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        apellidos: user.apellidos,
        estado: user.estado,
        email: user.email
      },
      tenant: user.tenant_id
        ? { id: user.tenant_id, name: user.tenant_name }
        : null
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Error en login", error: error?.message || String(error) });
  }
};
