# starwars-names

[![travis build](https://img.shields.io/travis/stanko-arbutina/starwars-names?style=plastic)](https://travis-ci.org/github/stanko-arbutina/starwars-names)
[![codecov coverage](https://img.shields.io/codecov/c/gh/stanko-arbutina/starwars-names?style=plastic)](https://codecov.io/gh/stanko-arbutina/starwars-names)
![npm](https://img.shields.io/npm/v/@stanko-arbutina/starwars-names?style=plastic)
![license](https://img.shields.io/npm/l/@stanko-arbutina/starwars-names?style=plastic)

Get random Star Wars character names for your projects.

## Installation

```bash
npm install @stanko-arbutina/starwars-names
```

## Usage

### Get a random name

```javascript
const starWarsNames = require('@stanko-arbutina/starwars-names');

starWarsNames.random(); // Returns a single random Star Wars character name
```

### Get multiple random names

```javascript
starWarsNames.random(5); // Returns an array of 5 random Star Wars character names
```

### Get all available names

```javascript
starWarsNames.all; // Returns an array of all Star Wars character names
```

## Features

- 🎬 Curated collection of Star Wars character names
- 🎲 Random name generation
- 📦 Lightweight and dependency-minimal
- ✅ 100% test coverage
- 🔄 Unique random selection (no duplicates in consecutive calls)

## License

MIT