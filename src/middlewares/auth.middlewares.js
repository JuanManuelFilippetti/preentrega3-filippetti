export const authMiddleware = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res
          .status(401)
          .json({ message: "No estas autorizado para ingresar" });
      }
      next();
    };
  };