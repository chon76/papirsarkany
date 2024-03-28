/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type TwineDiameters = Array<{
  diameter?: number;
  pricePerMeter?: number;
  tensileStrength?: number;
  _key: string;
}>;

export type Twine = {
  _id: string;
  _type: "twine";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  diameters?: TwineDiameters;
};

export type Reel = {
  _id: string;
  _type: "reel";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Lengths = Array<number>;

export type Diameters = Array<{
  diameter?: number;
  pricePerMeter?: number;
  lengths?: Lengths;
  _key: string;
}>;

export type Rod = {
  _id: string;
  _type: "rod";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  diameters?: Diameters;
};

export type KiteMaterials = Array<"ripstop" | "\xFCvegsz\xE1las m\u0171anyag" | "fa" | "nylon" | "bambusz" | "pap\xEDr">;

export type Kite = {
  _id: string;
  _type: "kite";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  price?: number;
  size?: string;
  materials?: KiteMaterials;
  windSpeed?: "gyeng\xE9t\u0151l a k\xF6zepes sz\xE9lig" | "gyeng\xE9t\u0151l az \xE9l\xE9nk sz\xE9lig" | "k\xF6zepest\u0151l az \xE9l\xE9nk sz\xE9lig";
  isBeginner?: boolean;
  description?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};
export declare const internalGroqTypeReferenceTo: unique symbol;

// Source: ./src/lib/sanity.ts
// Variable: getAllKitesQuery
// Query: *[_type == "kite"] {..., image { asset -> { url, metadata } } } 
export type GetAllKitesQueryResult = Array<{
  _id: string;
  _type: "kite";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image: {
    asset: {
      url: string | null;
      metadata: SanityImageMetadata | null;
    } | null;
  } | null;
  price?: number;
  size?: string;
  materials?: KiteMaterials;
  windSpeed?: "gyeng\xE9t\u0151l a k\xF6zepes sz\xE9lig" | "gyeng\xE9t\u0151l az \xE9l\xE9nk sz\xE9lig" | "k\xF6zepest\u0151l az \xE9l\xE9nk sz\xE9lig";
  isBeginner?: boolean;
  description?: string;
}>;
// Variable: getKiteBySlugQuery
// Query:     *[_type == "kite" && slug == $slug] {      ...,      image {        asset-> {          metadata        }      }    }  
export type GetKiteBySlugQueryResult = Array<{
  _id: string;
  _type: "kite";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image: {
    asset: {
      metadata: SanityImageMetadata | null;
    } | null;
  } | null;
  price?: number;
  size?: string;
  materials?: KiteMaterials;
  windSpeed?: "gyeng\xE9t\u0151l a k\xF6zepes sz\xE9lig" | "gyeng\xE9t\u0151l az \xE9l\xE9nk sz\xE9lig" | "k\xF6zepest\u0151l az \xE9l\xE9nk sz\xE9lig";
  isBeginner?: boolean;
  description?: string;
}>;
// Variable: getAllRodsQuery
// Query:     *[_type == "rod"] {      ...,      image {        asset-> {          metadata        }      }    }  
export type GetAllRodsQueryResult = Array<{
  _id: string;
  _type: "rod";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image: {
    asset: {
      metadata: SanityImageMetadata | null;
    } | null;
  } | null;
  diameters?: Diameters;
}>;
// Variable: getAllReelsQuery
// Query:     *[_type == "reel"] {      ...,      image {        asset-> {          metadata        }      }    }  
export type GetAllReelsQueryResult = Array<{
  _id: string;
  _type: "reel";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image: {
    asset: {
      metadata: SanityImageMetadata | null;
    } | null;
  } | null;
}>;
// Variable: getAllTwinesQuery
// Query:     *[_type == "twine"] {      ...,      image {        asset-> {          metadata        }      }    }  
export type GetAllTwinesQueryResult = Array<{
  _id: string;
  _type: "twine";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image: {
    asset: {
      metadata: SanityImageMetadata | null;
    } | null;
  } | null;
  diameters?: TwineDiameters;
}>;

