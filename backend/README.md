Backend project
--------------

### Tech stack

#### TileStache
- install pip: https://pip.pypa.io/en/latest/installing.html
- `pip install pillow`
- install image libs: http://codeinthehole.com/writing/how-to-install-pil-on-64-bit-ubuntu-1204/
- `sudo pip install --allow-all-external --allow-unverified TileStache --allow-unverified ModestMaps --allow-unverified PIL TileStache`
- `wget http://awien.de/opendata/demoArchiv_93be53.mbtiles`
- write tilestache.cfg, see tilestache.cfg.example
- write apache config, see apache-site.example
- `sudo service apache2 restart`
