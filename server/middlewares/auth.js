const User = require("../models/user.model");
const RateLimit = require("express-rate-limit");
exports.protect = (req, res, next) => {
  try {
    if (
      !req.headers.authorization &&
      !req.headers.authorization.startsWith("Bearer")
    ) {
      return res.status(401).json({ message: "You are not logged in" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRECT);
    req.user = User.findById(decoded.id);
    next();
  } catch (err) {
    console.log(err);
  }
};
// Login va register jarayonlariga rate-limiting qo'shish foydalanuvchining ko'p marta noto'g'ri parol kiritishi orqali tizimga hujum qilishining oldini oladi.

exports.limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many requests from this IP, please try again after 15 minutes",
});
