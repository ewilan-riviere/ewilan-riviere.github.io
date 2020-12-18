.PHONY: copy generate gitpush deploy

copy:
	rsync -rlpcgoDvzi --delete src/dist/ deploy/ --exclude-from 'exclude-list.txt'
	

gitpush:
	git add .
	# git commit -am "deploy"; git subtree push --prefix=deploy origin master
	git commit -am "deploy"
	git push origin `git subtree split --prefix deploy master`:master --force
	cd -

generate:
	cd src ; npm run generate ; cd -

deploy: generate copy gitpush


