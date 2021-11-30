{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodePackages.eslint
    nodePackages.typescript-language-server
    nodePackages.typescript
    nodePackages.uglify-js
    nodejs

    # keep this line if you use bash
    bashInteractive
  ];
}
