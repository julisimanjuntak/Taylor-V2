import { readFileSync, watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import moment from "moment-timezone";
moment.locale("id");
import colors from "colors";
import { WA_DEFAULT_EPHEMERAL } from "@whiskeysockets/baileys";
const { cosplay: cosplay, mountain: mountain, dynamic: dynamic, flamming: flamming, galau: galau, estetik: estetik, waifu: waifu, boneka: boneka } = JSON.parse(readFileSync("./json/image/image.json"));
async function loadConfig() {
  try {
    colors.setTheme({
        main: ["brightBlue", "bold"],
        silly: "rainbow",
        input: "grey",
        verbose: "cyan",
        prompt: "grey",
        info: "green",
        data: "grey",
        help: "cyan",
        warn: "yellow",
        debug: "blue",
        error: "brightRed"
      }), global.owner = [
        ["6283849369400", "️𝑾𝒖𝒅𝒚𝒔𝒐𝒇𝒕 - 𝑶𝒘𝒏𝒆𝒓", !0]
      ],
      global.mods = ["6283849369400"], global.prems = ["6283849369400"], global.APIs = {
        amel: "https://melcanz.com",
        bg: "http://bochil.ddns.net",
        dhnjing: "https://dhnjing.xyz",
        dzx: "https://api.dhamzxploit.my.id",
        fdci: "https://api.fdci.se",
        hardianto: "https://hardianto.xyz",
        lolhuman: "https://api.lolhuman.xyz",
        neoxr: "https://api.neoxr.my.id",
        pencarikode: "https://pencarikode.xyz",
        xteam: "https://api.xteam.xyz",
        xyro: "https://api.xyroinee.xyz",
        zeks: "https://api.zeks.xyz",
        zenz: "https://api.zahwazein.xyz",
        btchx: "https://api.botcahx.biz.id"
      }, global.APIKeys = {
        "https://api.neoxr.my.id": pickRandom(["5VC9rvNx", "lucycat"]),
        "https://api.lolhuman.xyz": pickRandom(["043c5de3b7cd6b1b8f2a0f90", "e1a815979e6adfc071b7eafc", "ed78c137a46873c5b8e5fe3b", "IchanZX", "GataDios", "elainaai"]),
        "https://api.xteam.xyz": "HIRO",
        "https://api.xyroinee.xyz": "yqiBQF86F4",
        "https://api.zeks.xyz": "apivinz",
        "https://hardianto.xyz": "hardianto",
        "https://melcanz.com": "manHkmst",
        "https://pencarikode.xyz": "pais",
        "https://api.zahwazein.xyz": "zenzkey_1ec92f71d3bb",
        "https://api.botcahx.biz.id": "Admin"
      }, global.lolkey = pickRandom(["043c5de3b7cd6b1b8f2a0f90", "e1a815979e6adfc071b7eafc", "ed78c137a46873c5b8e5fe3b", "IchanZX", "GataDios", "elainaai"]),
      global.xyro = "yqiBQF86F4", global.nomorbot = "6283849369400", global.nomorown = "6283849369400",
      global.namebot = " ᴛᴀyʟᴏʀ-ʙᴏᴛ あ⁩ ", global.nameown = "「 𝑾𝒖𝒅𝒚𝒔𝒐𝒇𝒕 」", global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "⛥", "✗", "⚜", "⚚", "♪"]),
      global.htjava = pickRandom(["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"]),
      global.wm = "                「 ᴛᴀyʟᴏʀ-ʙᴏᴛ あ⁩ 」", global.wm2 = "꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷",
      global.wm3 = htjava + " ᴛᴀyʟᴏʀ-ʙᴏᴛ", global.giflogo = VideoGalau(), global.fla = pickRandom(ImgLogoFlam()),
      global.flaaa = ImgLogoFlam(), global.brandc = ImgLogoDynamic(), global.sig = "https://www.instagram.com/bertoananta",
      global.sgh = "https://www.github.com/Ayamgorng", global.sgc = "https://s.id/Taylor-V2",
      global.sdc = "https://www.discord.com/wudysoft", global.snh = "https://www.tiktok.com/@upload_file",
      global.sfb = "https://www.facebook.com/", global.syt = "https://www.youtube.com/",
      global.premnsfw = !0, global.dpptx = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      global.ddocx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      global.dxlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      global.dpdf = "application/pdf", global.drtf = "text/rtf", global.fsizedoc = SizeDoc(),
      global.fpagedoc = PageDoc(), global.dmenut = htjava + "───『", global.dmenub = "│" + pmenus,
      global.dmenub2 = "│" + pmenus, global.dmenuf = "╰──────────⳹", global.dashmenu = "☰ *D A S B O A R D* ☰",
      global.htki = htjava + "───『", global.htka = "』───" + htjava, global.hwaifu = ImgWaifu(),
      global.hbeach = ImgCosplay(), global.thumbnailUrl = ImgBoneka(), global.hoppai = ImgCosplay(),
      global.hloli = ImgCosplay(), global.hyuri = ImgCosplay(), global.hneko = ImgCosplay(),
      global.hLokun = ImgCosplay(), global.hbunny = ImgCosplay(), global.thumbs = ImgBoneka(),
      global.thumb = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300", "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300", "https://source.unsplash.com/2400x1300/?wallpapers", ImgEstetik()]),
      global.imagebot = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300", "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300", "https://source.unsplash.com/2400x1300/?wallpapers", ImgMountain()]),
      global.thumbdoc = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300", "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300", "https://source.unsplash.com/2400x1300/?wallpapers", ImgEstetik()]),
      global.logo = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300", "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300", "https://source.unsplash.com/2400x1300/?wallpapers", ImgMountain()]),
      global.ucapan = Pagi(), global.ephemeral = WA_DEFAULT_EPHEMERAL, global.doc = pickRandom(["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]),
      global.knimg = pickRandom(["https://api.yimian.xyz/img?size=1800-2400x900-1300", "https://minimalistic-wallpaper.demolab.com/?random", "https://picsum.photos/2400/1300", "https://source.unsplash.com/2400x1300/?wallpapers", ImgMountain()]),
      global.lopr = "🅟", global.lolm = "Ⓛ", global.cmenut = htjava + "───『", global.cmenuh = "』───" + htjava,
      global.cmenub = "│" + pmenus, global.cmenuf = "╰──────────⳹", global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ",
      global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"]),
      global.packname = "𝑴𝒂𝒅𝒆 𝒃𝒚", global.stickpack = packname, global.author = "𝑻𝒂𝒚𝒍𝒐𝒓 乂 𝑾𝒖𝒅𝒚𝒔𝒐𝒇𝒕",
      global.stickauth = author + "\nwa.me/" + nomorbot, global.multiplier = 69, global.eror = pickRandom(["❌", "🚫", "💥", "❎"]),
      global.wait = pickRandom(["⏳", "⌛", "⏰", "⏱️"]), global.render = pickRandom(["_*`Rendering 📍`*_", "_*`Processing 📍`*_", "_*`Generating content 📍`*_"]),
      global.webs = "https://s.id/Cerdasin62", global.gcwangsaf = "https://chat.whatsapp.com/ERCurMZ0ns8CqHkdG7AeSf",
      global.saweria = "https://saweria.com/egabertoananta", global.dana = "083195893959",
      global.pulsa = "083195893959", global.trakteer = "https://trakteer.id/egabertoananta",
      global.paypal = "nxestore.me@mail.com", global.gopay = "083195893959", global.pdana = "083195893959",
      global.povo = "083195893959", global.pgopay = "083195893959", global.ppulsa = "083195893959",
      global.ppulsa2 = "083195893959", global.psaweria = "https://saweria.com/egabertoananta",
      global.rpg = {
        emoticon(string) {
          string = string.toLowerCase();
          const emot = {
              Fox: "🦊",
              agility: "🤸‍♂️",
              anggur: "🍇",
              apel: "🍎",
              aqua: "🥤",
              arc: "🏹",
              armor: "🥼",
              bank: "🏦",
              batu: "🧱",
              berlian: "💎",
              bibitanggur: "🍇",
              bibitapel: "🍎",
              bibitjeruk: "🍊",
              bibitmangga: "🥭",
              bibitpisang: "🍌",
              botol: "🍾",
              bow: "🏹",
              bull: "🐃",
              cat: "🐈",
              centaur: "🎠",
              chicken: "🐓",
              coal: "⚱️",
              common: "📦",
              cow: "🐄",
              crystal: "🔮",
              darkcrystal: "♠️",
              diamond: "💎",
              dog: "🐕",
              dragon: "🐉",
              eleksirb: "🧪",
              elephant: "🐘",
              emasbatang: "🪙",
              emasbiasa: "🥇",
              emerald: "💚",
              exp: "✉️",
              fishingrod: "🎣",
              foodpet: "🍱",
              fox: "🦊",
              gardenboc: "🗳️",
              gardenboxs: "📦",
              gems: "🍀",
              giraffe: "🦒",
              gold: "👑",
              griffin: "🦒",
              health: "❤️",
              healtmonster: "❤‍🔥",
              horse: "🐎",
              intelligence: "🧠",
              iron: "⛓️",
              jeruk: "🍊",
              kaleng: "🥫",
              kardus: "📦",
              kayu: "🪵",
              ketake: "💿",
              keygold: "🔑",
              keyiron: "🗝️",
              knife: "🔪",
              koinexpg: "👛",
              kucing: "🐈",
              kuda: "🐎",
              kyubi: "🦊",
              legendary: "🗃️",
              level: "🧬",
              limit: "🌌",
              lion: "🦁",
              magicwand: "⚕️",
              makanancentaur: "🥗",
              makanangriffin: "🥙",
              makanankyubi: "🍗",
              makanannaga: "🍖",
              makananpet: "🥩",
              makananphonix: "🧀",
              mana: "🪄",
              mangga: "🥭",
              money: "💵",
              mythic: "🗳️",
              mythic: "🪄",
              naga: "🐉",
              pancingan: "🎣",
              pet: "🎁",
              petFood: "🍖",
              phonix: "🦅",
              pickaxe: "⛏️",
              pisang: "🍌",
              pointxp: "📧",
              potion: "🥤",
              rock: "🪨",
              robo: "🤖",
              rubah: "🦊",
              sampah: "🗑️",
              serigala: "🐺",
              snake: "🐍",
              stamina: "⚡",
              strength: "🦹‍♀️",
              string: "🕸️",
              superior: "💼",
              sword: "⚔️",
              tiger: "🐅",
              tiketcoin: "🎟️",
              trash: "🗑",
              umpan: "🪱",
              uncommon: "🎁",
              upgrader: "🧰",
              wood: "🪵"
            },
            results = Object.keys(emot).map((v => [v, new RegExp(v, "gi")])).filter((v => v[1].test(string)));
          return results.length ? emot[results[0][0]] : "";
        }
      };
  } catch (err) {
    console.error(`Error in Load Config: ${err.message}`);
  } finally {
    setTimeout(loadConfig, 9e5);
  }
}
export { loadConfig };
const file = fileURLToPath(import.meta.url);

function Pagi() {
  const waktunya = moment.tz("Asia/Jakarta").format("HH");
  return waktunya >= 24 ? "Selamat Begadang 🗿" : waktunya >= 18 ? "Selamat malam 🌙" : waktunya >= 15 ? "Selamat sore 🌅" : waktunya > 10 ? "Selamat siang ☀️" : waktunya >= 4 ? "Selamat pagi 🌄" : "Selamat Pagi 🗿";
}

function pickRandom(list) {
  const shuffledList = list.slice().sort((() => Math.random() - .5));
  return shuffledList[Math.floor(Math.random() * shuffledList.length)];
}

function ImgCosplay() {
  return cosplay;
}

function ImgMountain() {
  return pickRandom(mountain);
}

function ImgLogoDynamic() {
  return dynamic.map((id => `https://dynamic.brandcrowd.com/asset/logo/${id}/logo?v=4&text=`));
}

function ImgLogoFlam() {
  return flamming.map((id => `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=${id}&doScale=true&scaleWidth=480&scaleHeight=240&fontsize=120&backgroundColor=%23000300&shadowType=2&text=`));
}

function VideoGalau() {
  return `https://telegra.ph/file/${pickRandom(galau)}.mp4`;
}

function ImgEstetik() {
  return pickRandom(estetik);
}

function ImgWaifu() {
  return waifu;
}

function ImgBoneka() {
  return boneka;
}

function Sapa() {
  return pickRandom(["Apa kabar ", "Halo ", "Hai "]);
}

function SizeDoc() {
  return Math.pow(10, 15);
}

function PageDoc() {
  return Math.pow(10, 10);
}

function businessOwnerJid() {
  return pickRandom([pickRandom([global.nomorown, "0", "6283195893959", "6283849369400", "6282195322106", "6281119568305", "6281282722861", "6282112790446"]) + "@s.whatsapp.net"]);
}
watchFile(file, (() => {
  unwatchFile(file), console.log(chalk.redBright("Update config.js")), import(`${file}?update=${Date.now()}`);
}));