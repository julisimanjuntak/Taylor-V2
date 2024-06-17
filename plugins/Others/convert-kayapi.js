import uploadImage from "../../lib/uploadImage.js";
import { sticker } from "../../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn: conn, text: text, command: command }) => {
  try {
    if (["gay", "jail", "rgb", "hitler", "gun"].includes(command)) {
      let q = m.quoted ? m.quoted : m,
        mime = (q.msg || q).mimetype || "";
      if (!mime) throw "Tidak ada foto";
      if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
      let img = await (q?.download()),
        kay = "http://keyapi.ml/" + command + "?avatar=" + await uploadImage(img),
        stiker = await sticker(null, kay, packname, author);
      await conn.sendFile(m.chat, stiker, "kay.webp", "", m);
    }
    if (command === ["penguin"]) {
      let kay = "http://keyapi.ml/" + command,
        kuy = await (await fetch(kay)).json();
      await conn.sendFile(m.chat, kuy.data, "kay.jpg", "", m);
    }
    if (command === ["fakeperson"]) {
      let kay = "http://keyapi.ml/" + command,
        kuy = await (await fetch(kay)).json(),
        { birth_data: birth_data, color: color, bonus: bonus, latitude: latitude, useragent: useragent, cardexpir: cardexpir, uuid: uuid, email_u: email_u, password: password, hair: hair, ipv4: ipv4, domain_url: domain_url, phone_h: phone_h, macaddress: macaddress, company: company, email_d: email_d, pict: pict, longitude: longitude, height: height, maiden_name: maiden_name, address: address, email_url: email_url, phone_w: phone_w, weight: weight, blood: blood, url: url, ipv4_url: ipv4_url, plasticcard: plasticcard, eye: eye, domain: domain, name: name, sport: sport, username: username } = kuy.data,
        caption = birth_data + "\n" + color + "\n" + bonus + "\n" + latitude + "\n" + useragent + "\n" + cardexpir + "\n" + uuid + "\n" + email_u + "\n" + password + "\n" + hair + "\n" + ipv4 + "\n" + domain_url + "\n" + phone_h + "\n" + macaddress + "\n" + company + "\n" + email_d + "\n" + pict + "\n" + longitude + "\n" + height + "\n" + maiden_name + "\n" + address + "\n" + email_url + "\n" + phone_w + "\n" + weight + "\n" + blood + "\n" + url + "\n" + ipv4_url + "\n" + plasticcard + "\n" + eye + "\n" + domain + "\n" + name + "\n" + sport + "\n" + username;
      await conn.sendFile(m.chat, logo, "kay.jpg", caption, m);
    }
    if (["skulls", "god", "megamind", "oogway"].includes(command)) {
      let kay = "http://keyapi.ml/" + command + "?text=" + text;
      await conn.sendFile(m.chat, kay, "kay.jpg", "", m);
    }
  } catch (e) {
    m.reply("Conversion Failed");
  }
};
handler.help = ["jail", "skulls", "gay", "rgb", "god", "penguin", "fakeperson", "hitler", "megamind", "oogway", "gun"].map((v => v + " <Reply Media>")),
  handler.tags = ["sticker"], handler.command = ["jail", "skulls", "gay", "rgb", "god", "penguin", "fakeperson", "hitler", "megamind", "oogway", "gun"];
export default handler;