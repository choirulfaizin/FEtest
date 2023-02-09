import iconLogo from './assets/img/kotakode-logo.svg';
import gambarMain from './assets/img/globe.gif';
import landing2 from './assets/img/illustrasi-landing-2-min.png';
import landing3 from './assets/img/illustrasi-landing-3-min.png';
import landing4 from './assets/img/illustrasi-landing-4-min.png';
import dotOrange from './assets/img/orangeDot.svg';
import dotHijau from './assets/img/greenDot.svg';
import bgTele from './assets/img/telegramBG.svg';
import tele from './assets/img/telegram.svg';
import svg1 from './assets/img/landingGraphic4.svg';
import svg2 from './assets/img/landingGraphic5.svg';
import svg3 from './assets/img/job.png';
import p1 from './assets/img/logo/android.svg';
import p2 from './assets/img/logo/bootstrap.svg';
import p3 from './assets/img/logo/codeigniter.svg';
import p4 from './assets/img/logo/css.svg';
import p5 from './assets/img/logo/firebase.svg';
import p6 from './assets/img/logo/git.svg';
import p7 from './assets/img/logo/html.svg';
import p8 from './assets/img/logo/java.svg';
import p9 from './assets/img/logo/javascript.svg';
import p10 from './assets/img/logo/jquery.svg';
import p11 from './assets/img/logo/kotlin.svg';
import p12 from './assets/img/logo/node.svg';
import p13 from './assets/img/logo/php.svg';
import p14 from './assets/img/logo/python.svg';
import p15 from './assets/img/logo/react.svg';
import p16 from './assets/img/logo/sql.svg';
import p17 from './assets/img/logo/swift.svg';

function App() {
  const menus = ["Tentang", "Produk", "FAQ", "Events", "Partnership"];

  return (
    <div className="bg-white">
      <header className="container max-w-7xl mx-auto flex flex-row pt-5 items-center space-x-36">
        <img alt="KotaKode" src={iconLogo} className="w-36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-7 font-bold text-gray-500">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button className=" rounded-md border-emerald-500 text-emerald-500 border py-2 px-6">Masuk</button>
          <button className=" rounded-md bg-emerald-500 text-white py-2 px-6">Daftar</button>
        </div>
      </header>
      <main className="container max-w-7xl mx-auto grid grid-cols-2 pt-24">
        <div>
          <h1 className="font-bold text-5xl pb-5">
            Jadilah Bagian dari<br/>Komunitas Tech Terbesar<br/>di Indonesia
          </h1>
          <div className="font-normal text-sm pb-12">Ikutan diskusi forum tanya jawab, tulis blog dan<br/>Membangun portofolio semua di Kotakode</div>
          <div className="space-x-6 flex flex-row">
            <input type="email" name="email" class="mt-1 px-3 py-2 basis-1/3 bg-white border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Masukkan Email Kamu" />
            <button className="py-3 px-8 basis-1/6 bg-orange-500 rounded-md text-white font-semibold">Daftar</button>
          </div>
          <div className="space-x-6 flex flex-row items-center pt-24">
            <div class="p-3 bg-orange-100 drop-shadow-2xl rounded-lg w-32 h-32">
              <h1 className="font-bold text-4xl pb-5">29447</h1>
              <div className="font-normal text-sm pb-12">User Bergabung</div>
            </div>
            <div class="p-3 bg-orange-100 drop-shadow-2xl rounded-lg w-32 h-32">
              <h1 className="font-bold text-4xl pb-5">1073</h1>
              <div className="font-normal text-sm pb-12">Blog Ditulis</div>
            </div>
            <div class="p-3 bg-orange-100 drop-shadow-2xl rounded-lg w-32 h-32">
              <h1 className="font-bold text-4xl pb-5">19597</h1>
              <div className="font-normal text-sm pb-12">Total Pertanyaan <br/>& Jawaban</div>
            </div>
          </div>
        </div>
        <div>
          <img className="top-96" src={gambarMain} alt="Globe"/>
        </div>
      </main>
      <section>
        <div className="container max-w-7xl mx-auto">
          <div class="bg-emerald-400 rounded-xl p-5">
            <div class="grid grid-cols-3 gap-3">
              <div class="grid-cols-12 p-5">
                <div class="bg-gray-50 shadow-lg rounded-lg grid grid-cols-2">
                  <img class="pt-8 pb-6 pl-6 w-32 w-full" src={landing2} alt="land2"></img>
                  <div class="pt-3 pb-4">
                    <p class="text-xl font-bold">Jawaban cepat, tepat & gratis</p>
                    <p class="pt-2 text-sm">Dapatkan jawaban dalam hitungan menit dari ribuan programmer lainnya.</p>
                  </div>
                </div>
                <div class="mt-5 bg-gray-50 shadow-lg rounded-lg grid grid-cols-2">
                  <img class="pt-8 pb-6 pl-6 w-32 w-full" src={landing3} alt="land3"></img>
                  <div class="pt-3 pb-4">
                    <p class="text-xl font-bold">Konsep Gamifikasi</p>
                    <p class="pt-2 text-sm">Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer.</p>
                  </div>
                </div>
              </div>
              <div class="grid-cols-12 p-5">
                <div class="bg-gray-50 shadow-lg rounded-lg p-5">
                  <img class="h-32 w-full object-contain" src={landing4} alt="land4"></img>
                  <p class="pt-3 text-xl font-bold text-center">Bangun Online Portofolio</p>
                  <p class="p-3 text-sm text-center">Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas.</p>
                </div>
              </div>
              <div class="grid-cols-12 p-5 relative overflow-visible">
                <h1 className="font-bold text-5xl text-gray-50 pb-5">Mengapa perlu menggunakan Kotakode?</h1>
                <p class="text-xl text-gray-50 bg-local inline-block">Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode memberikan fasilitas guna mensejahterakan kehidupan penduduknya.</p>
                <img class="flex absolute bottom-14 right-3" src={dotOrange} alt="dot"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container max-w-7xl mx-auto">
        <div class="mt-20 grid grid-cols-3 gap-3 row">
          <div></div>
          <div></div>
          <div class="grid-cols-12 p-7">
            <div class="overflow-visible relative max-w-sm mx-auto shadow-xl p-5">
              <div class="flex absolute -left-14 top-20">
                <div class="w-28 h-28 rounded-full border-4 border-emerald-500">
                  <img class="w-20 h-20 ml-3 mt-3" src={svg1} alt="svg1"></img>
                </div>
              </div>
              <div class="p-2 ml-12">
                <p class="pt-3 text-xl font-bold">Online Forum</p>
                <p class="pt-5 pb-5 text-sm">Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas.</p>
                <button className="py-3 px-8 basis-1/6 bg-orange-500 rounded-md text-white font-semibold">Tanya Sekarang</button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 grid grid-cols-2 row">
          <div class="relative overflow-visible">
            <img class="flex absolute -top-10" src={dotHijau} alt="doth"></img>
            <h1 className="font-bold text-5xl pb-5">
              Satu Platform, <br/>Banyak Solusi
            </h1>
            <div className="font-normal text-lg pb-12">Kotakode memfasilitasi dengan memberikan berbagai fitur <br/> yang menarik dan terbaik untuk mengembangkan ekosistem<br/> IT anak bangsa.</div>
          </div>
          <div class="grid-cols-12 p-7">
            <div class="overflow-visible relative max-w-sm mx-auto shadow-xl p-5">
              <div class="flex absolute -left-14 top-20">
                <div class="w-28 h-28 rounded-full border-4 border-emerald-500">
                  <img class="w-20 h-20 ml-3 mt-3" src={svg2} alt="svg2"></img>
                </div>
              </div>
              <div class="p-2 ml-12">
                <p class="pt-3 text-xl font-bold">Microblogging</p>
                <p class="pt-5 pb-5 text-sm">Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT</p>
                <button className="py-3 px-8 basis-1/6 bg-orange-500 rounded-md text-white font-semibold">Tanya Sekarang</button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 grid grid-cols-3 gap-3 row">
        <div></div>
        <div></div>
        <div class="grid-cols-12 p-7">
          <div class="overflow-visible relative max-w-sm mx-auto shadow-xl p-5 grayscale">
            <div class="flex absolute -left-14 top-20">
              <div class="w-28 h-28 rounded-full border-4 border-emerald-500">
                <img class="w-20 h-20 ml-3 mt-3" src={svg3} alt="svg3"></img>
              </div>
            </div>
            <div class="p-2 ml-12">
              <p class="pt-3 text-xl font-bold">Job Hiring (Coming Soon)</p>
              <p class="pt-5 pb-5 text-sm">Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan</p>
              <button className="py-3 px-8 basis-1/6 bg-orange-500 rounded-md text-white font-semibold">Cari Kerja</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="overflow-visible relative mt-24">
        <img src={bgTele} alt="bgtrans"></img>
        <div class="container max-w-7xl mx-auto grid grid-cols-6 gap-4">
          <div class="p-4"></div>
          <div class="col-start-2 col-span-4 items-center justify-center">
            <img class="w-full flex flex-wrap justify-center items-center absolute -right-6 top-32 h-40" src={tele} alt="tele"></img>
            <div class="absolute text-center top-80">
              <p class="pt-3 text-4xl font-bold">Gabung Komunitas Telegram Kotakode</p>
              <p class="pt-5 pb-5 text-lg">Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk bersama mencapai tujuan yang besar</p>
              <button className="py-3 px-8 basis-1/6 bg-orange-500 rounded-md text-white font-semibold">Ikuti Telegram!</button>
              <h1 className="font-bold text-5xl pt-72">
                Dapatkan Bantuan dari Ribuan<br/> Ahli dan Professional Programmer<br/> di Seluruh Indonesia
              </h1><br/>
              <div className="font-normal text-xl pb-12">Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh Pengembangan Proyek</div>
            </div>
          </div>
          <div class="p-4"></div>
        </div>
        <div class="container max-w-7xl mx-auto">
          <div class="flex flex-row text-center">
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p1}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p2}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p3}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p4}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p5}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p6}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p7}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p8}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p9}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p10}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p11}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p12}></img>
              </div><br/>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p13}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p14}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p15}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p16}></img>
              </div>
              <div class="w-28 h-28 rounded-lg border-2 border-emerald-500">
                <img class="w-20 h-20 mx-auto mt-3" src={p17}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-black pt-24 pb-12">
        <div class="container grid grid-cols-4 gap-4">
          <div class="">

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
