# Check if File or Directory Exists GitHub Action
Input file(s) or directories and it will error if the input cannot be found. Useful for testing if your build artifacts exist before releasing them.

## Usage
```yml
- name: File or Directory Exists
  uses: dothq/file-or-directory-exists@latest
  with:
    input: |
      ./foo.txt
      /home/user/bar.js
```

## Inputs

Input | Description
--- | ---
input | List of files/directories to check
