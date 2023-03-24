{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "SAM-APP";
  buildInputs = [
    pkgs.python39
    pkgs.python39Packages.pip
  ];
}
