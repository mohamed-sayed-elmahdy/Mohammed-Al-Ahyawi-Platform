/* eslint-disable @next/next/no-img-element -- ImageResponse needs native img elements for embedded sources. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "صورة مشاركة منصة محمد الإحيوي للتجارب والجولات والتقييمات";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [background, portrait, logo] = await Promise.all([
    readFile(join(process.cwd(), "public", "hero.png")),
    readFile(join(process.cwd(), "public", "mohamed.png")),
    readFile(join(process.cwd(), "public", "logo.png")),
  ]);
  const imageSource = (data: Buffer) =>
    `data:image/png;base64,${data.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#08111f",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          alt=""
          src={imageSource(background)}
          style={{
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 62%",
            position: "absolute",
            width: "100%",
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(5, 12, 24, 0.96) 0%, rgba(5, 12, 24, 0.78) 46%, rgba(5, 12, 24, 0.05) 100%)",
            height: "100%",
            position: "absolute",
            width: "100%",
          }}
        />
        <div
          style={{
            border: "1px solid rgba(248, 216, 120, 0.5)",
            height: 584,
            left: 22,
            position: "absolute",
            top: 22,
            width: 1154,
          }}
        />
        <img
          alt=""
          src={imageSource(portrait)}
          style={{
            bottom: -52,
            height: 625,
            objectFit: "contain",
            position: "absolute",
            right: 20,
            width: 410,
          }}
        />
        <div
          style={{
            alignItems: "flex-start",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            left: 84,
            position: "absolute",
            top: 110,
          }}
        >
          <img
            alt=""
            src={imageSource(logo)}
            style={{ height: 88, objectFit: "contain", width: 132 }}
          />
          <div
            style={{
              color: "#f8d878",
              fontSize: 54,
              fontWeight: 700,
              letterSpacing: 1,
              lineHeight: 1.1,
              marginTop: 20,
            }}
          >
            MOHAMMED
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: 3,
              lineHeight: 1.1,
              marginTop: 7,
            }}
          >
            AL AHYAWI
          </div>
          <div
            style={{
              color: "#e2e8f0",
              fontSize: 19,
              letterSpacing: 2,
              marginTop: 22,
            }}
          >
            TRAVEL · REVIEWS · EXPERIENCES
          </div>
        </div>
      </div>
    ),
    size
  );
}
