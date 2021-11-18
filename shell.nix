{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodePackages.typescript
    nodejs

    # keep this line if you use bash
    bashInteractive
  ];
}
