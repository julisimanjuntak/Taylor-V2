import { Cerpen } from "dhn-api";
const handler = async (m, { conn: conn, args: args, usedPrefix: usedPrefix, text: text, command: command }) => {
  m.react(wait);
  try {
    let cap = `🔍 *[ RESULT ]*\n\n${await Cerpen()}\n`;
    m.reply(cap);
  } catch (e) {
    m.react(eror);
  }
};
handler.help = ["cerpen"], handler.tags = ["internet"], handler.command = /^(cerpen)$/i;
export default handler;