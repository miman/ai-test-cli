aicli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/aicli.svg)](https://npmjs.org/package/aicli)
[![Downloads/week](https://img.shields.io/npm/dw/aicli.svg)](https://npmjs.org/package/aicli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aicli
$ aicli COMMAND
running command...
$ aicli (--version)
aicli/0.0.0 win32-x64 node-v20.11.0
$ aicli --help [COMMAND]
USAGE
  $ aicli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aicli hello PERSON`](#aicli-hello-person)
* [`aicli hello world`](#aicli-hello-world)
* [`aicli help [COMMAND]`](#aicli-help-command)
* [`aicli plugins`](#aicli-plugins)
* [`aicli plugins add PLUGIN`](#aicli-plugins-add-plugin)
* [`aicli plugins:inspect PLUGIN...`](#aicli-pluginsinspect-plugin)
* [`aicli plugins install PLUGIN`](#aicli-plugins-install-plugin)
* [`aicli plugins link PATH`](#aicli-plugins-link-path)
* [`aicli plugins remove [PLUGIN]`](#aicli-plugins-remove-plugin)
* [`aicli plugins reset`](#aicli-plugins-reset)
* [`aicli plugins uninstall [PLUGIN]`](#aicli-plugins-uninstall-plugin)
* [`aicli plugins unlink [PLUGIN]`](#aicli-plugins-unlink-plugin)
* [`aicli plugins update`](#aicli-plugins-update)

## `aicli hello PERSON`

Say hello

```
USAGE
  $ aicli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ aicli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/miman/aicli/blob/v0.0.0/src/commands/hello/index.ts)_

## `aicli hello world`

Say hello world

```
USAGE
  $ aicli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ aicli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/miman/aicli/blob/v0.0.0/src/commands/hello/world.ts)_

## `aicli help [COMMAND]`

Display help for aicli.

```
USAGE
  $ aicli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aicli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.8/src/commands/help.ts)_

## `aicli plugins`

List installed plugins.

```
USAGE
  $ aicli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aicli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/index.ts)_

## `aicli plugins add PLUGIN`

Installs a plugin into aicli.

```
USAGE
  $ aicli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into aicli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AICLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AICLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ aicli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ aicli plugins add myplugin

  Install a plugin from a github url.

    $ aicli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ aicli plugins add someuser/someplugin
```

## `aicli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aicli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aicli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/inspect.ts)_

## `aicli plugins install PLUGIN`

Installs a plugin into aicli.

```
USAGE
  $ aicli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into aicli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AICLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AICLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ aicli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ aicli plugins install myplugin

  Install a plugin from a github url.

    $ aicli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ aicli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/install.ts)_

## `aicli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ aicli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ aicli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/link.ts)_

## `aicli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aicli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aicli plugins unlink
  $ aicli plugins remove

EXAMPLES
  $ aicli plugins remove myplugin
```

## `aicli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ aicli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/reset.ts)_

## `aicli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aicli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aicli plugins unlink
  $ aicli plugins remove

EXAMPLES
  $ aicli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/uninstall.ts)_

## `aicli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ aicli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aicli plugins unlink
  $ aicli plugins remove

EXAMPLES
  $ aicli plugins unlink myplugin
```

## `aicli plugins update`

Update installed plugins.

```
USAGE
  $ aicli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
