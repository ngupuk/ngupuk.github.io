---
layout: post
title: Bagaimana Ngupuk Mengedit Audio
tags: editing audio
author: Wafa
---

## Persiapan

Setelah merekam audio menggunakan aplikasi zoom.
File audio akan terpisah menjadi audio untuk masing-masing orang.
Namun file audio hasil rekaman biasanya dalam format `.m4a`.
Format file ini tidak didukung untuk aplikasi edit audio yang kami pakai
yakni **Audacity**.
Jadi sebelum proses editing dimulai, kami akan convert dari `.m4a`
menjadi `.wav` dengna menggunakan aplikasi **FFMPEG**.
Dengan perintah sederhana.

```shell
ffmpeg -i input.m4a output.wav
```

## Editing

Pertama, kami akan memontong bagian-bagian yang tak perlu
dari sebuah audio panjang untuk masing-masing orang.
Sekali memotong audio, artinya harus memotong
pada posisi yang sama untuk masing-masing orang.
Kamu juga menambahkan efek _equalizer_ pada audio agar menambah detail suara.
Biasanya kami mengurangi bagian _Bass_ (0 Hz - 500 Hz),
menaikkan bagian _Middle_ (1 kHz - 2 Khz) dan menaikkan _Hight_ (15 kHz - 20 kHz)

Setelah selesai, maka kami akan melakuan _export_ dalam file `.mp3`.
Namun file itu terkadang terlalu besar untuk di upload.
Maklum kuota sudah banyak untuk remakan. Jadi jangan lupa sawer **Ngupuk**.

{% include sawer.html %}

Jadi, kami merubah dalam format `.ogg` yang cukuk kecil dengan **FFMPEG** lagi.

```shell
ffmpeg -i hasil.mp3 upload.ogg
```

## Finishing

Setelah di upload pada aplikasi **Anchor**.
Kami menambahkan _background audio_ yang cocok,
Menambahkan judul, deskripsi dan _thumbnail_.
Semuanya selesai, sekarang kamu bisa mendengarkannya di **Spotify**.

<iframe src="https://open.spotify.com/embed/show/50m3Obwrrx2Cpn0M7aanR7" width="100%" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

---

**Daftar Link:**

- Spotify: [disini](https://open.spotify.com/show/50m3Obwrrx2Cpn0M7aanR7)
- FFMPEG: [disini](https://ffmpeg.org/).
- Audacity: [disini](https://www.audacityteam.org/).
- Anchor: [disini](https://anchor.fm/ngupuk).
