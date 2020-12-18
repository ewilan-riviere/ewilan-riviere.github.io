.PHONY: copy generate gitpush deploy

GIT_REMOTE='git@github.com:ewilan-riviere/ewilan-riviere.github.io.git'

clean:
	@echo "Bouyah GIT_REMOTE"
	$(MAKE) -C deploy

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

	rm -rf deploy/*
	cd ..
	git add .
	git commit -am "end deploy"
	
	git push

generate:
	cd src ; yarn ; yarn generate ; cd ..

deploy: clean
