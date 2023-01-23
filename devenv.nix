{ pkgs, config, ... }:

{
  packages = [
    pkgs.yarn
  ];

  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs-19_x;
}