.PHONY: copy generate gitpush deploy

copy:
	rsync -rlpcgoDvzi --delete src/dist/ deploy/
	cp README.md deploy/

gitpush:
	sed -i -e 's/^deploy/# deploy/g' .gitignore
	git add .
	git commit -am "deploy"
	git push origin `git subtree split --prefix deploy master`:master --force

	sed -i -e 's/^# deploy/deploy/g' .gitignore
	git add .
	git commit -am "wip deploy"

	rm -rf deploy/* ; rm -rf deploy/.*
	cd ..
	git add .
	git commit -am "end deploy"
	
	git push

generate:
	cd src ; yarn ; yarn generate ; cd ..

deploy: generate copy gitpush
