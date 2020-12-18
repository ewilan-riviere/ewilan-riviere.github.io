.PHONY: copy generate gitpush deploy

copy:
	rsync -rlpcgoDvzi --delete src/dist/ deploy/ --exclude-from 'exclude-list.txt'
	

gitpush:
	git add . ; git commit -am "deploy"; git subtree push --force --prefix=deploy origin master; cd -

generate:
	cd src ; npm run generate ; cd -

deploy: copy gitpush


