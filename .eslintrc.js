module.exports = {
  "extends": ['scratch', 'scratch/node', 'scratch/react', 'scratch/es6'],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "globals": {
    "LocalFileSystem": true,
    "FileTransfer": true,
    "LocalFileSystem": true,
    "FileUploadOptions": true,
    "FileTransfer": true,
    "cordova": true
  },
  "rules": {
    "no-console": 0
  },
  "env": {
    "browser": true,
    "node": true
  }
};
