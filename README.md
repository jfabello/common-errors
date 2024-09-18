# Node.js Common Errors Classes

[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A simple Node.js module that provides common errors as classes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Common Errors Classes](#common-errors-classes)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this module via npm:

```bash
npm install @jfabello/common-errors
```

## Usage

After installation, import the module and use the common errors classes in your application:

```javascript
const commonErrors = require("@jfabello/common-errors");

try {
	// Some code that may fail
} catch (error) {
	if (error.code === "EACCES") {
		// Handle this known error
	} else {
		// Throw the ERROR_UNKNOWN common error
		throw new commonErrors.ERROR_UNKNOWN();
	}
}
```

## Common Errors Classes

The following common errors classes are available:

| Error class     | Description   |
| --------------- | ------------- |
| `ERROR_UNKNOWN` | Unknown error |

## Contributing

Unfortunately, we are not able to accept contributions at this time.

If you find a bug in the code, please open an issue.

Thank you for your understanding.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
