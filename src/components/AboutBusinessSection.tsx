import AboutBusinessIcon from '@/assets/about-business.svg';

export default function AboutBusinessSection() {
  return (
    <section id="vallalkozas" className="py-12">
      <div className="pb-4 pr-4 sm:float-left">
        <AboutBusinessIcon className="h-32 w-32" />
      </div>
      <div>
        <p>Üzletem nincs, ezért postai utánvétellel szállítok, melynek költsége a megrendelőt terheli.</p>

        <p>
          A postai utánvételes szállításhoz szükség van a megrendelő pontos nevére, címére (irányítószámmal), továbbá a
          rendelt sárkány nevére, mennyiségére. Ha a számlázási cím nem azonos a megrendelőével, kérem azt is
          pontosanmegjelölni!
        </p>

        <p>Személyesen Nagykovácsiban (63-as BKV busszal megközelíthető) is vásárolhat.</p>

        <p>
          Sárkányaim repülési és nyolc napos pénzvisszafizetési garanciával kaphatók. A visszaküldés költsége a vevőt
          terheli.
        </p>

        <p>
          Minden érdeklődőnek egy óra ingyenes oktatás sárkány biztosításával - vásárlási kötelezettség nélkül -
          Nagykovácsiban. (Telefonos időpont egyeztetés után.)
        </p>

        <p>
          Mindenkinek kellemes sárkányeresztést kíván a www.papirsarkany.hu egyéni vállalkozás tulajdonosa: <br />
          <div>
          Ducsai Barnabás
          <br />
          <b>Adószám:</b> 61090938-1-33
          <br />
          <div className="gap-1 sm:flex">
            <b>Számlaszámom:</b>
            <div>
              www.papirsarkany.hu
              <br />
              Ducsai Barnabás
              <br />
              Erste Bank 11600006-00000000-76709302
            </div>
          </div>
        </div>
        </p>


      </div>
    </section>
  );
}