{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "NIX";
  buildInputs = [
    pkgs.nodejs-18_x
    pkgs.nodePackages_latest.pnpm
    pkgs.nodePackages_latest.yarn
  ];
}
