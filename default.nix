{ pkgs ? import <nixpkgs> { }}:

pkgs.stdenv.mkDerivation rec {
  name = "Xeact";
  version = "latest";
  src = ./.;
  buildInputs = with pkgs; [ nodePackages.uglify-js ];
  phases = "installPhase";
  installPhase = ''
    mkdir -p $out/static/js

    uglifyjs $src/xeact.js -c -m > $out/static/js/xeact.min.js
  '';
}
