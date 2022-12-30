{ pkgs, config, ... }:

{
  enterShell = ''
    rm -f .devenv/bin
    ln -sf ${pkgs.buildEnv { name = "devenv"; paths = config.packages; ignoreCollisions = true; }}/bin .devenv/bin
  '';

  packages = [
    pkgs.yarn
  ];

  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs-18_x;
}