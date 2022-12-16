# TNF-FE-Project
Take-home coding challenge for The North Face

### Coding Challenge Requirements

- Create a basic layout that matches the desktop and mobile designs.
- Use Style Guide to find colors, fonts, and other css needs.
- Should be responsive. Desktop to mobile breakpoint is 1024px.
- Have the buttons link to your favorite TNF product.  
- Complete and submitted within 72 hours.

### Dev Setup

To create a quick, easy to use dev server, and to view this repo on a Mac or Windows machine, follow the steps below.
- On GitHub.com, navigate to the main page of the repository.
- Above the list of files, click Code.
- Copy the URL for the repository git@github.com:RJKirkhope/TNF-FE-Project.git.
- Open a terminal window
- Change the current working directory to the location where you want the cloned directory.
- Type `git clone`, and then paste the URL you copied earlier.
- Press Enter to create your local clone.

- If you don't have homebrew installed do so now, you can check by typing `brew update`

- Check if you have node and npm installed with `node-V` and `npm-V` respectively
- If present `npm install -g npm` should get you the latest version.

On newer Macs, homebrew installs in a weird way, so further steps are required.
If you see `zsh: command not found: brew` you can resolve this by following these steps: 
- In a new terminal window`export PATH="/opt/homebrew/bin:$PATH"`
- `echo 'export PATH="/opt/homebrew/bin:$PATH"' >> $HOME/.zshrc`
- Close terminal window and reopen
- Run `brew update`
- Run `node -v`
- If no node version is present install with `brew install node`
- Install node live server with `npm install live-server -g`
- Navigate to the cloned repo, and in your terminal run `live-server`

Helpful tips for running on a Windows machine
- Download node (gitbash and the windows installer from nodejs.org should get you there).
- You should now be able to navigate to the main project directory.
- Run npm install -g live-server.

The project should open in a new browser window 