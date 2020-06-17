# Dengarkan Ngupuk dan Cerita kami

Kami akan menceritakan banyak hal di websini.

<iframe src="https://open.spotify.com/embed/show/50m3Obwrrx2Cpn0M7aanR7" width="100%" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

---

# Support dengan Saweran

Jangan lupa sawer **NGUPUK** agar kami bisa beli kuota sambil ngupuk terus. Sekali rekaman bisa habis hampir 1GB _cuk_.

[![https://saweria.co/ngupuk](https://dabuttonfactory.com/button.png?t=Klik+untuk+kirim+saweran&f=Open+Sans-Bold&ts=26&tc=fff&hp=45&vp=20&c=11&bgt=unicolored&bgc=15d798)](https://saweria.co/ngupuk)

---

## Episode sebelumnya

{% for cat in site.category-list %}

  <ul>
    {% for page in site.posts %}
      {% for pc in page.categories %}
        {% if pc == cat %}
          <li><a href="{{ page.url }}">{{ page.title }}</a></li>
        {% endif %}   
      {% endfor %}  
    {% endfor %}  
  </ul>
{% endfor %}

---

## Semua Artikel

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
