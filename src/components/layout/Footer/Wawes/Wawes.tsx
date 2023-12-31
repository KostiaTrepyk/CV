import { Box, SxProps } from "@mui/material";
import { background, primary } from "core/Theme/theme";

import styles from "./wawes.module.css";

interface WawesProps {
    sx?: SxProps;
}

const Wawes: React.FC<WawesProps> = ({ sx }) => {
    return (
        <Box
            sx={sx}
            viewBox="0 0 1440 390"
            className="transition duration-300 ease-in-out delay-150"
            component="svg"
        >
            <defs>
                <linearGradient
                    id="gradient"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                >
                    <stop
                        offset="5%"
                        stopColor={background}
                    ></stop>
                    <stop
                        offset="95%"
                        stopColor={primary}
                    ></stop>
                </linearGradient>
            </defs>
            <path
                d="M 0,400 C 0,400 0,80 0,80 C 53.91274476125042,72.33184472689797 107.82548952250085,64.66368945379595 184,69 C 260.17451047749915,73.33631054620405 358.610786671247,89.67708691171418 429,89 C 499.389213328753,88.32291308828582 541.731363792511,70.62796289934731 598,68 C 654.268636207489,65.37203710065269 724.4637581587084,77.81106149089659 794,78 C 863.5362418412916,78.18893850910341 932.4136035726553,66.12779113706631 1016,71 C 1099.5863964273447,75.87220886293369 1197.8818275506696,97.6777739608382 1271,102 C 1344.1181724493304,106.3222260391618 1392.0590862246652,93.16111301958091 1440,80 C 1440,80 1440,400 1440,400 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="0.265"
                className={`${styles["transition-all"]} ${styles["duration-300"]} ${styles["ease-in-out"]} ${styles["delay-150"]} ${styles["path-0"]}`}
            ></path>

            <path
                d="M 0,400 C 0,400 0,160 0,160 C 79.81655788388869,165.3390587427001 159.63311576777738,170.6781174854002 232,163 C 304.3668842322226,155.3218825145998 369.2840948127791,134.62658880109927 420,139 C 470.7159051872209,143.37341119890073 507.23050498110615,172.8155273102027 581,172 C 654.7694950188938,171.1844726897973 765.7938852627962,140.11130195809 850,131 C 934.2061147372038,121.88869804191 991.5939539677088,134.7392648574373 1056,149 C 1120.4060460322912,163.2607351425627 1191.8302988663688,178.93163861216078 1257,181 C 1322.1697011336312,183.06836138783922 1381.0848505668155,171.5341806939196 1440,160 C 1440,160 1440,400 1440,400 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="0.4"
                className={`${styles["transition-all"]} ${styles["duration-300"]} ${styles["ease-in-out"]} ${styles["delay-150"]} ${styles["path-1"]}`}
            ></path>

            <path
                d="M 0,400 C 0,400 0,240 0,240 C 83.60632085194092,225.2944005496393 167.21264170388184,210.58880109927858 240,217 C 312.78735829611816,223.41119890072142 374.7557540364135,250.93919615252491 429,255 C 483.2442459635865,259.0608038474751 529.7643421504639,239.65441429062176 594,231 C 658.2356578495361,222.34558570937824 740.1868773617313,224.44314668498802 824,223 C 907.8131226382687,221.55685331501198 993.4881484026107,216.57299896942632 1062,221 C 1130.5118515973893,225.42700103057368 1181.8605290278256,239.26485743730677 1242,244 C 1302.1394709721744,248.73514256269323 1371.0697354860872,244.3675712813466 1440,240 C 1440,240 1440,400 1440,400 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="0.53"
                className={`${styles["transition-all"]} ${styles["duration-300"]} ${styles["ease-in-out"]} ${styles["delay-150"]} ${styles["path-2"]}`}
            ></path>

            <path
                d="M 0,400 C 0,400 0,320 0,320 C 69.05599450360702,313.665407076606 138.11198900721405,307.330814153212 205,302 C 271.88801099278595,296.669185846788 336.60803847475086,292.3421504637582 415,301 C 493.39196152524914,309.6578495362418 585.4558570937824,331.3005839917554 654,331 C 722.5441429062176,330.6994160082446 767.5685331501201,308.4555135692202 825,311 C 882.4314668498799,313.5444864307798 952.2700103057366,340.87736173136375 1026,346 C 1099.7299896942634,351.12263826863625 1177.3514256269325,334.0350395053246 1247,326 C 1316.6485743730675,317.9649604946754 1378.3242871865336,318.98248024733766 1440,320 C 1440,320 1440,400 1440,400 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="1"
                className={`${styles["transition-all"]} ${styles["duration-300"]} ${styles["ease-in-out"]} ${styles["delay-150"]} ${styles["path-3"]}`}
            ></path>
        </Box>
    );
};

export default Wawes;
