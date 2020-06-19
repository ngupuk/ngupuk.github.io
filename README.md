# Dengarkan Ngupuk dan Cerita kami

Kami akan menceritakan banyak hal di websini.

<iframe src="https://open.spotify.com/embed/show/50m3Obwrrx2Cpn0M7aanR7" width="100%" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

---

# Support dengan Saweran

Jangan lupa sawer **NGUPUK** agar kami bisa beli kuota sambil ngupuk terus. Sekali rekaman bisa habis hampir 1GB _cuk_.

<p>
  Jangan lupa dukung ngupuk dengan klik tombol <strong>Dukung Ngupuk</strong>
  Kalian bisa gunakan ovo, gopay, link aja dll
</p>
<p>
  <a href="https://saweria.co/ngupuk">
    <img
      src="https://dabuttonfactory.com/button.png?t=Dukung+Ngupuk&amp;f=Open+Sans-Bold&amp;ts=26&amp;tc=fff&amp;hp=45&amp;vp=20&amp;c=11&amp;bgt=unicolored&amp;bgc=15d798"
      alt="https://saweria.co/ngupuk" />
  </a>
</p>

---

## Episode Podcast

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

## Artikel

<ul>
{% for post in site.posts %}
  {% if post.hide != true %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
