{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "NIX";
  buildInputs = [
    pkgs.python39
    pkgs.python39Packages.pip
  ];
}
