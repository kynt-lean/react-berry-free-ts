#!/bin/bash

# Check if the react-js-to-ts package is installed globally
if command -v react-js-to-ts &> /dev/null
then
    echo "react-js-to-ts could not be found. Installing globally..."
    npm install -g react-js-to-ts
fi

# Find all .js and .jsx files in the project
echo "Converting all .js and .jsx files to TypeScript (.ts and .tsx)..."

find ./src -name '*.jsx' | while read file
do
    # Run the conversion tool on each .js and .jsx file
    react-js-to-ts "$file"
done

# Install TypeScript and other necessary packages
echo "Installing TypeScript and React TypeScript types..."
npm install --save-dev typescript @types/react @types/react-dom

# Create a basic tsconfig.json if it doesn't exist
if [ ! -f "tsconfig.json" ]; then
    echo "Creating tsconfig.json..."
    npx tsc --init
fi

echo "Conversion completed!"