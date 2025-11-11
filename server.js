// // server.js
// import express from 'express';
// import cors from 'cors';
// import TelegramBot from 'node-telegram-bot-api';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // === TO'G'RI BOT MA'LUMOTLARI ===
// const TOKEN = process.env.BOT_TOKEN;
// const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID; // 1091525532

// console.log('🔧 To\'g\'ri bot sozlamalari:');
// console.log('🤖 Bot: UZUM_LOGIN_BOT');
// console.log('👤 Admin User ID:', ADMIN_CHAT_ID);
// console.log('✅ Token mavjud:', TOKEN ? 'Ha' : 'Yo\'q');

// const bot = new TelegramBot(TOKEN, { polling: false });

// // Botni tekshirish
// bot.getMe().then(me => {
//     console.log('✅ Bot faol:', me.first_name, '(@' + me.username + ')');
// }).catch(error => {
//     console.error('❌ Bot xatosi:', error.message);
// });

// // === Kodlar uchun vaqtinchalik saqlovchi ===
// const codes = new Map();
// const CODE_TTL_MS = 5 * 60 * 1000;

// function generate4Digit() {
//     return Math.floor(1000 + Math.random() * 9000).toString();
// }

// // === 1) Telefon raqamni yuborish ===
// app.post("/sendPhone", async (req, res) => {
//     try {
//         const { phone } = req.body;
//         console.log('📞 Qabul qilingan telefon:', phone);
        
//         if (!phone) {
//             return res.status(400).json({ success: false, error: "Telefon raqam kiritilmadi" });
//         }

//         const code = generate4Digit();
//         codes.set(phone, { 
//             code, 
//             expiresAt: Date.now() + CODE_TTL_MS,
//             createdAt: new Date().toLocaleString()
//         });

//         console.log(`🔐 ${phone} uchun kod: ${code}`);

//         // TELEGRAMGA XABAR YUBORISH
//         try {
//             const message = `
// 🎯 UZUM MARKET KIRISH
// 📱 Telefon: <code>${phone}</code>
// 🔐 Tasdiqlash kodi: <b>${code}</b>
// ⏰ Vaqt: ${new Date().toLocaleString()}
// 📊 Aktiv kodlar: ${codes.size} ta

// ⚠️ Bu kod 5 daqiqa amal qiladi
//             `.trim();
            
//             await bot.sendMessage(ADMIN_CHAT_ID, message, {
//                 parse_mode: 'HTML'
//             });
//             console.log('✅ Xabar Telegramga MUVAFFAQIYATLI yuborildi!');
            
//         } catch (telegramError) {
//             console.error('❌ Telegram xatosi:', telegramError.message);
//             // Xatoni tahlil qilish
//             if (telegramError.response && telegramError.response.statusCode === 403) {
//                 console.log('❌ Foydalanuvchi botni bloklagan yoki chat topilmadi');
//             } else if (telegramError.response && telegramError.response.statusCode === 400) {
//                 console.log('❌ Noto‘g‘ri chat ID');
//             }
//         }

//         return res.json({ 
//             success: true, 
//             message: "Kod yuborildi"
//         });

//     } catch (err) {
//         console.error("❌ sendPhone xatolik:", err);
//         return res.status(500).json({ success: false, error: "Server xatolik" });
//     }
// });

// // === 2) Kodni tekshirish ===
// app.post("/verifyCode", async (req, res) => {
//     try {
//         const { phone, code } = req.body;
//         console.log('🔐 Kod tekshirish:', { phone, code });
        
//         if (!phone || !code) {
//             return res.status(400).json({ success: false, error: "Telefon va kod kiritilishi kerak" });
//         }

//         const entry = codes.get(phone);
//         if (!entry) {
//             console.log('❌ Kod topilmadi:', phone);
//             return res.json({ 
//                 success: true, 
//                 valid: false, 
//                 error: "Kod topilmadi yoki muddati tugagan" 
//             });
//         }

//         // Kodni tekshirish
//         const isValid = entry.code === String(code);
//         console.log(`🔍 Kod tekshirish: ${isValid ? '✅ TO‘G‘RI' : '❌ NOTO‘G‘RI'} (${entry.code} vs ${code})`);

//         if (isValid) {
//             codes.delete(phone);
//             console.log('✅ Kod to‘g‘ri, raqam tasdiqlandi:', phone);
            
//             // Telegramga tasdiq xabari
//             try {
//                 await bot.sendMessage(ADMIN_CHAT_ID, 
//                     `✅ KIRISH TASDIQLANDI!\n\n📱 Telefon: <code>${phone}</code>\n🕒 Vaqt: ${new Date().toLocaleString()}\n\n🎉 Foydalanuvchi muvaffaqiyatli kirdi!`,
//                     { parse_mode: 'HTML' }
//                 );
//                 console.log('✅ Tasdiq xabari yuborildi');
//             } catch (telegramError) {
//                 console.error('❌ Tasdiq xabarini yuborishda xato:', telegramError.message);
//             }
            
//             return res.json({ 
//                 success: true, 
//                 valid: true, 
//                 message: "Muvaffaqiyatli kirildi!" 
//             });
//         } else {
//             console.log('❌ Noto‘g‘ri kod');
//             return res.json({ 
//                 success: true, 
//                 valid: false, 
//                 error: "Noto'g'ri kod" 
//             });
//         }

//     } catch (err) {
//         console.error("❌ verifyCode xatolik:", err);
//         return res.status(500).json({ success: false, error: "Server xatolik" });
//     }
// });

// // Kodlar ro'yxatini ko'rish (test uchun)
// app.get("/codes", (req, res) => {
//     const codesList = Array.from(codes.entries()).map(([phone, data]) => ({
//         phone,
//         code: data.code,
//         createdAt: data.createdAt,
//         expiresIn: Math.round((data.expiresAt - Date.now()) / 1000) + 's'
//     }));
    
//     res.json({
//         total: codes.size,
//         codes: codesList
//     });
// });

// // Server holati
// app.get("/health", (req, res) => {
//     res.json({ 
//         status: "OK", 
//         timestamp: new Date().toISOString(),
//         activeCodes: codes.size,
//         bot: "UZUM_LOGIN_BOT",
//         admin: "1091525532 (M)",
//         note: "Bot to'g'ri sozlandi"
//     });
// });

// // === Serverni ishga tushirish ===
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log('\n🚀 ===== UZUM LOGIN BOT ISHGA TUSHDI =====');
//     console.log(`📍 Port: http://localhost:${PORT}`);
//     console.log(`🤖 Bot: @UZUM_LOGIN_BOT`);
//     console.log(`👤 Admin: 1091525532 (SIZ)`);
//     console.log(`🔗 Health: http://localhost:${PORT}/health`);
//     console.log('==========================================\n');
    
//     // Botni qayta tekshirish
//     bot.getMe()
//         .then(me => {
//             console.log(`✅ Bot tayyor: ${me.first_name}`);
//             console.log(`🔗 Bot link: https://t.me/${me.username}`);
//             console.log(`📩 Endi kodlar sizning shaxsiy Telegramingizga keladi!`);
//         })
//         .catch(err => {
//             console.log('❌ Bot bilan muammo:', err.message);
//         });
// });
// server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// === EMAIL SOZLAMALARI ===
const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // sizning gmail manzilingiz
const EMAIL_PASS = process.env.EMAIL_PASS;   // app password (oddiy parol emas)
const CODE_TTL_MS = 5 * 60 * 1000; // 5 daqiqa

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ADMIN_EMAIL,
    pass: EMAIL_PASS,
  },
});

// Ulanishni tekshirish
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email ulanish xatosi:", error.message);
  } else {
    console.log("✅ Email tayyor — xabar yuborish mumkin!");
  }
});

// === Kodlar uchun vaqtinchalik xotira ===
const codes = new Map();

function generate4Digit() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

// === 1) Emailga kod yuborish ===
app.post("/sendEmail", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("📧 Qabul qilingan email:", email);

    if (!email) {
      return res.status(400).json({ success: false, error: "Email kiritilmadi" });
    }

    const code = generate4Digit();
    codes.set(email, {
      code,
      expiresAt: Date.now() + CODE_TTL_MS,
      createdAt: new Date().toLocaleString(),
    });

    console.log(`🔐 ${email} uchun kod: ${code}`);

    // Email yuborish
    const mailOptions = {
      from: `"Uzum Market Login" <${ADMIN_EMAIL}>`,
      to: email,
      subject: "🔐 Uzum Market kirish uchun kod",
      html: `
        <div style="font-family:sans-serif; padding:10px;">
          <h2>Uzum Market tizimiga kirish</h2>
          <p>📧 Sizning email: <b>${email}</b></p>
          <p>🔐 Tasdiqlash kodi: <b style="font-size:20px;">${code}</b></p>
          <p>⏰ Bu kod 5 daqiqa davomida amal qiladi.</p>
          <hr/>
          <small>${new Date().toLocaleString()}</small>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Kod emailga yuborildi:", email);

    return res.json({ success: true, message: "Kod yuborildi (email orqali)" });
  } catch (err) {
    console.error("❌ sendEmail xatolik:", err);
    return res.status(500).json({ success: false, error: "Server xatolik" });
  }
});

// === 2) Kodni tekshirish ===
app.post("/verifyCode", async (req, res) => {
  try {
    const { email, code } = req.body;
    console.log("🔍 Kod tekshirish:", { email, code });

    if (!email || !code) {
      return res.status(400).json({ success: false, error: "Email va kod kiritilishi kerak" });
    }

    const entry = codes.get(email);
    if (!entry) {
      console.log("❌ Kod topilmadi:", email);
      return res.json({
        success: true,
        valid: false,
        error: "Kod topilmadi yoki muddati tugagan",
      });
    }

    const isValid = entry.code === String(code);
    console.log(`🧾 Kod solishtirish: ${isValid ? "✅ TO‘G‘RI" : "❌ NOTO‘G‘RI"}`);

    if (isValid) {
      codes.delete(email);
      console.log("✅ Kod to‘g‘ri, foydalanuvchi tasdiqlandi:", email);
      return res.json({
        success: true,
        valid: true,
        message: "Muvaffaqiyatli kirildi!",
      });
    } else {
      return res.json({
        success: true,
        valid: false,
        error: "Noto‘g‘ri kod",
      });
    }
  } catch (err) {
    console.error("❌ verifyCode xatolik:", err);
    return res.status(500).json({ success: false, error: "Server xatolik" });
  }
});

// === Kodlar ro‘yxatini ko‘rish (test uchun) ===
app.get("/codes", (req, res) => {
  const codesList = Array.from(codes.entries()).map(([email, data]) => ({
    email,
    code: data.code,
    createdAt: data.createdAt,
    expiresIn: Math.round((data.expiresAt - Date.now()) / 1000) + "s",
  }));

  res.json({ total: codes.size, codes: codesList });
});

// === Server ishga tushishi ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("\n🚀 ===== EMAIL KOD BOT ISHGA TUSHDI =====");
  console.log(`📍 Port: http://localhost:${PORT}`);
  console.log(`📧 Admin email: ${ADMIN_EMAIL}`);
  console.log("==========================================\n");
});
