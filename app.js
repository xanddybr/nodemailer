const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "xanddybr@gmail.com",
    pass: "ojbe skqv holy scrb", 
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Catarse Treinament!" <xanddybr@gmail.com>', // sender address
    to: "alessouza@live.com, xanddybr@gmail.com", // list of receivers
    subject: "Sua apostila de brinde acaba de chegar!", // Subject line
    text: "", // plain text body
    html: "<h1>Hello Guy!</h1><br><br> Follow this link for download your gift <br><br>  https://smallpdf.com/file#s=c72b24c0-f00c-4f8d-9d6a-06503a87ce80", // html body
    attachments:  [{ filename: "catarseie_gift.pdf", path: "./catarseie_gift.pdf" }],
  });

  console.log("Message sent: %s", info.messageId + " " + info.response);
  
}

main().catch(console.error);  