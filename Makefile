.PHONY: copy generate gitpush deploy

copy:
	rsync -rlpcgoDvzi --delete src/dist/ deploy/ --exclude-from 'exclude-list.txt'
	

gitpush:
	sed -i -e 's/# deploy\/*/deploy\/*/g' .gitignore
	git add .
	git commit -am "deploy"
	git push origin `git subtree split --prefix deploy master`:master --force
	sed -i -e 's/deploy\/*/# deploy\/*/g' .gitignore

generate:
	cd src ; npm run generate ; cd -

deploy: generate copy gitpush
