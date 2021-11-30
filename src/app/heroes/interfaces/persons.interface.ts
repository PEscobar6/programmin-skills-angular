export interface Person {
    id?:            string;
    fullname:       string;
    birth:          string;
    id_father?:      number | null;
    id_mother?:      number | null;
    alt_img?:       string; // https://kasdfjaskdfajsdf.com/img.png
}

export interface HelperRequest {
    status:         number;
    title:          string;
    message:        string;
    icon:           string;
    details:        [];
}
