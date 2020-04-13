````bash
# Set up version of Node and CDK
nvm install v10.19.0
npm install -g aws-cdk@1.31.0
cd MyApp
# Install Peer Dependencies
npm info . peerDependencies | sed -n 's/^{\{0,1\}[[:space:]]*'\''\{0,1\}\([^:'\'']*\)'\''\{0,1\}:[[:space:]]'\''\([^'\'']*\).*$/\1@\2/p' | xargs npm i
# Build and Package Construct
npm run build
npm run package
cd ../OldVer
nvm install v12.16.0
npm install aws-cdk@1.29.0
npm install&&npm run build&&../node_modules/aws-cdk/bin/cdk synth
````