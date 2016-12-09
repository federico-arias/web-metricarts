mkdir target
cp -r ../target/images target/
cp ../style.css .
rm theme.zip
zip -r theme.zip * -x make.sh
