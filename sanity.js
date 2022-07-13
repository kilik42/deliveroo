import sanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = sanityClient({
    projectId: "r00m9cyu",
    dataset: "production",
    // token: "my-token",
    useCdn: true,
    // usePublic: true,
    // useProjectHost: true,
    // useCdnForUploads: true,
    // useCdnForAssets: true,
    apiVersion: "v1"
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;