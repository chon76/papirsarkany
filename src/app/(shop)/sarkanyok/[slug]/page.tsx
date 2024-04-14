import AddToCartButton from '@/components/AddToCartButton';

import { currencyFormatter } from '@/lib/formatters';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllKites, getKiteBySlug } from '@/lib/sanity';

type Params = {
  slug: string;
};

export async function generateStaticParams(): Promise<Partial<Params>[]> {
  const kites = await getAllKites();

  return kites.map((kite) => ({
    slug: kite.slug?.current,
  }));
}

export default async function Kite({ params }: { params: Params }) {
  const kite = await getKiteBySlug(params.slug);

  // TODO remove this after BUG is fixed in not-found.tsx
  if (!kite) {
    notFound();
  }

  return (
    <div className="space-y-8 p-8 md:space-y-0 md:flex md:gap-4">
      <div className="md:flex-[3]">
        {kite.image && (
          <Image
            className="mx-auto rounded-lg object-cover md:w-fit md:h-full"
            src={kite.image.asset?.url || 'no-url'}
            width={kite.image.asset?.metadata?.dimensions?.width}
            height={kite.image.asset?.metadata?.dimensions?.height}
            alt={kite.name || 'no-name'}
            placeholder="blur"
            blurDataURL={kite.image.asset?.metadata?.blurHash}
          />
        )}
      </div>
      <div className="space-y-4 md:flex-[2] md:space-y-8">
        <div className="text-center md:text-left">
          <h1 className="font-bold">{kite.name}</h1>
          {kite.isBeginner && (
            <h3 className=" font-bold text-primary underline underline-offset-8">
              Kezdőknek ajánlott!
            </h3>
          )}
        </div>
        <div className="space-y-2 text-center md:text-left">
          {kite.price && (
            <h2 className="font-bold text-primary">
              {currencyFormatter(kite.price)}
            </h2>
          )}
          <AddToCartButton product={kite} />
        </div>
        <div className="space-y-1">
          {kite.size && (
            <h3>
              <b>Méret: </b>
              {kite.size}
            </h3>
          )}
          {kite.materials && kite.materials?.length > 0 && (
            <h3>
              <b>Anyagok: </b>
              {kite.materials.join(', ')}
            </h3>
          )}
          {kite.windSpeed && (
            <h3>
              <b>Szél: </b>
              {kite.windSpeed}
            </h3>
          )}
          <h4>{kite.description}</h4>
        </div>
      </div>
    </div>
  );
}
