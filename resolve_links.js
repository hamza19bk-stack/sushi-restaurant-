const urls = [
  "https://ibb.co/YFVcZTdV",
  "https://ibb.co/spmwfWZZ",
  "https://ibb.co/r2SKDL38",
  "https://ibb.co/TVXgybQ",
  "https://ibb.co/pBFQFSry",
  "https://ibb.co/yB6B1Xqd",
  "https://ibb.co/Wq9fb0P",
  "https://ibb.co/VYV9dDmG",
  "https://ibb.co/JR6GB94f",
  "https://ibb.co/cMkH2cc",
  "https://ibb.co/VcHdL7BX",
  "https://ibb.co/DgCDFN2Y",
  "https://ibb.co/zWxbKtsC",
  "https://ibb.co/DPqjjNs0",
  "https://ibb.co/3yq3pFkn"
];

async function run() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const match = text.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) {
        console.log(url + " => " + match[1]);
      } else {
        console.log(url + " => NOT FOUND");
      }
    } catch (e) {
      console.log(url + " => ERROR " + e.message);
    }
  }
}
run();
