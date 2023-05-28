type TAnimes = {
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    mal_id: string;
    url: string;
    score: number;
    titles:[{title: string}]
};
