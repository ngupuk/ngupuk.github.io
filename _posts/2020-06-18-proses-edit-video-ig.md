---
title: Cara Ngupuk Mengedit Video Instagram
author: Wafa
tags: [app, editing]
---

Membuat sebuah video postingan **Instagram** perlu sebuah aplikasi.
Namun, tak banyak aplikasi gratis yang memenuhi kebutuhan **Ngupuk**.
Beberapa fitur seperti blur, transparansi, visualisasi audio kadang tak ada.
Sehingga, **Ngupuk** membuat sendiri sebuah _library_ dalam bahasa **Python**.
Sekarang juga sudah rilis dan bisa kamu unduh.

Nama dari _library_ yang kami buat adalah **igmov**.
Kamu bisa mengunjungi [Repositori Github](https://github.com/ngupuk/igmov) dari project ini.
Kamu juga bisa mengunduhnya dengan menggunakan `pip`

```shell
pip install igmov
```

## Proses mengedit video

Kami juga sudah membuat template untuk video **Instagram**.
Jadi tinggal membuat kode sederhana.

```python
import igmov.template.ig as ig

audioPath = 'audio.mp3'
base = ig.template1() # pakai template pertama
base.useRandomBg("social") # background random dengan keyword 'social'
base.useNgupukLogo() # Menggunakan logo ngupuk
base.showSpotify() # Tambahkan tulisan "listen to spotify"
base.setTitle("010 Kangen Keluarga") # Mengatur Judul
base.makeVideo(audioPath, "010 instagram_video.mp4") # render...

```

Kamu juga bisa membuat untukmu sendiri,
bisa mengganti background dan logo menjadi fotomu.
Kode nya sangat mudah.

```python
import igmov.template.ig as ig

audioPath = 'audio.mp3'
base = ig.template1() # pakai template pertama
base.setBg('background.jpg')
base.setLogo('logo.jpg')
base.setTitle("Judul Bebas") # Mengatur Judul
base.makeVideo(audioPath, "hasil.mp4") # render...
```

Jika merasa terbantu, kamu bisa loh mengrim dukungan ke **Ngupuk**.
Tinggal klik tombol di bawah ini.

{% include sawer.html %}
