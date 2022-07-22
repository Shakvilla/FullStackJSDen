---
title: Set Up Javascript
---
## **Setting up and running Javascript**

### **Web Developer Tools**

Javascript powers the web through modern web browsers. Every Web browser out there come with the Latest stable Javascript pre-installed. This allows the web browser to run Javascript code in web applications. 

In this tutorial, I will guide you through how you can run write and execute Javascript code in the browser using the most popular web browsers on the Internet. Let me state that if your favourite browser is not covered in this tutorial, do not panic, because the techniques we will use here are applicable to most modern browsers. All you need to do is search how you can find Developer tools on the browser and viola. The browsers we will talk about are Google Chrome, Mozilla Firefox, Safari, Microsoft Edge and Brave Browser.

### **Google Chrome and Brave Browser**

Google chrome is one of the most popular browsers out there, which has won the hearts of a lot of developers. If you don’t have google chrome on your machine, you need to install and have it running before we can proceed.

Once you have google chrome installed, it comes with devtools already whipped into the browsers, so we are just going straight into where we can find the chrome browser console.

There are two ways you can navigate to the console; 

- Using the keyboard shortcuts to open the dev console. To do this, you need to open your chrome browser first, then press `F12` on windows OS or `Cmd+Opt+J` on Mac. This will open the developer tools console directly and it will like this;


{% figure src="/images/Jsimages/Screenshot_2022-07-17_at_10.59.20_PM.png" alt="google chrome dev console" width=800 height=400 /%}

- Before we start typing code, let me show you the other way to get to the dev console. Open your chrome browser, right click or double click on your mouse or mouse pad, now click on `inspect` on the popup like in the picture below;


{% figure src="/images/Jsimages/Screenshot_2022-07-17_at_11.08.37_PM.png" alt="google chrome dev" width=800 height=400 /%}

Now the developer tools will open, click on the console tab. This will take you to the devtools console.


{% figure src="/images/Jsimages/Screenshot_2022-07-17_at_11.15.07_PM.png" alt="google chrome developer tools"  width=600 height=500 /%}

Now we are ready to start typing Javascript in the browser. 

For example; let try to print out a simple “Hello World” Message in the console. Copy the code below and paste in the console.


💡 **Note:** ignore the message “*Console was cleared”* in my console. I have a couple. chrome extensions which add some Javascript code in the console once I open it, so to have a clean slate for this tutorial, I had to clear it. If you see a bunch of Javascript code in your console, and wish to clear it. Run `clear()` and press enter, this will clear the console for you.


```jsx
// print the hello world message to the console
console.log("Hello World!")
```

Now press `Enter` or `return` on your keyboard. The results will be `Hello World!` . Don’t worry if you don’t understand how the code works, in this course, I will have an in-depth discussion with you on how this whole thing works.


{% figure src="/images/Jsimages/Screenshot_2022-07-17_at_11.30.53_PM.png" alt="google chrome developer" width=800 height=400 /%}

### **Firefox and Edge**

- To use keyboard shortcuts to open console on Firefox and Edge, press `Ctrl + Shift+ I` or `F12` on Windows and Linux, or `Cmd+Opt+I` on macOS.
- Or open a new empty tab on your browser, right click or double click on your mouse or mouse pad respectively, select inspect on the popup, once the devtools open, navigate to the console tab. You will arrive at the dev console. See the image below;


{% figure src="/images/Jsimages/firefox_developer_tools.png" alt="google chrome developer" width=1000 height=300 /%}

### **Running Javascript on a code editor:**



In this section, we shall go through how you can install and run Javascript on the code editor. The code editor I use is [Visual Studio Code](https://code.visualstudio.com/) . Let me state clearly that, Visual Studio Code is just a personal preference, there are other good Code editors out there that you can use.They include;

- [Atom(Free, Cross-Platform)](https://atom.io/)
- [Webstorm(Paid, Cross-Platform)](https://www.jetbrains.com/webstorm/)
- [Notepad++(Free, Cross-Platform)](https://notepad-plus-plus.org/)
- [GNU Emacs(Free, Cross-Platform)](https://www.gnu.org/software/emacs/)
- [Sublime Text Editor(Freemium, Cross-Platform)](https://www.sublimetext.com/)
- [Brackets(Free)](http://brackets.io/)

Feel free to use the editor of your choice and follow along. However, Webstorm editor might have a different approach to working with Javascript files. Go through the docs on [JetBrains](https://www.jetbrains.com/webstorm/) and set it up.

Javascript files take the extension `.js`, once you create a file with the extension, then you can write Javascript code in that file and run it on the browser or node server. Based on this, you can decide to use normal text editor on windows to write Javascript but this is not advisable, as you will loose the good stuff(Syntax Highlighting, Code completion, Coloured code etc) code editors provide you.

### Download  and **Install Visual Studio Code**

> Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET).
> 


{% figure src="/images/Jsimages/VSCodeEditor.png" alt="VSCode Preview" width=713 height=431 /%}

Example Page of how VSCode Looks like

The Microsoft team have an in-depth documentation on VS Code. Click  on the link below to visit docs page.  [*Visual Studio Code Docs Website.](https://code.visualstudio.com/docs)* 

VS Code has support for Windows, Mac and Linux machines. Click on this [link](https://code.visualstudio.com/download) to download the supported version for your machine.

- **Windows**
    1. Download the [Visual Studio Code installer](https://go.microsoft.com/fwlink/?LinkID=534107) for Windows.
    2. Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). This will only take a minute.
    3. By default, VS Code is installed under:
    ```
    C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code
    ```

    
    Alternatively, you can also download a [Zip archive](https://code.visualstudio.com/docs/?dv=winzip), extract it and run Code from there.
    
    > **Tip:** Setup will add Visual Studio Code to your `%PATH%`, so from the console you can type 'code .' to open VS Code on that folder. You will need to restart your console after the installation for the change to the `%PATH%` environmental variable to take effect.
    > 
    
    [Read More](https://code.visualstudio.com/docs/setup/windows)
    
- **Mac**
    1.  [Download Visual Studio Code](https://go.microsoft.com/fwlink/?LinkID=534106) for macOS.
    2.  Open the browser's download list and locate the downloaded app or archive.
    3.  If archive, extract the archive contents. Use double-click for some browsers or select the 'magnifying glass' icon with Safari.
    4. Drag `Visual Studio Code.app` to the **Applications** folder, making it available in the macOS Launchpad.
    5. Open VS Code from the **Applications** folder, by double clicking the icon.
    6. Add VS Code to your Dock by right-clicking on the icon, located in the Dock, to bring up the context menu and choosing **Options**, **Keep in Dock**.
        
        **Launching from the command line**
        
        You can also run VS Code from the terminal by typing 'code' after adding it to the path:
        
        1. Launch VS Code.
        2. Open the **Command Palette** `(Cmd+Shift+P)` and type 'shell command' to find the **Shell Command: Install 'code' command in PATH** command. 
            
            
            {% figure src="/images/Jsimages/shell-command.png" alt="Shell Command Preview" width=618 height=100 /%}

        3. Restart the terminal for the new `$PATH` value to take effect. You'll be able to type 'code .' in any folder to start editing files in that folder
            
            > **Note:** If you still have the old `code`alias in your `.bash_profile` (or equivalent) from an early VS Code version, remove it and replace it by executing the **Shell Command: Install 'code' command in PATH** command.
            > 
- **Linux**
    
    See the [Download Visual Studio Code](https://code.visualstudio.com/download) page for a complete list of available installation options. By downloading and using Visual Studio Code, you agree to the [license terms](https://code.visualstudio.com/license) and [privacy statement](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409).
    
    **Debian and Ubuntu based distributions**
    
    The easiest way to install Visual Studio Code for Debian/Ubuntu based distributions is to download and install the [.deb package (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760868), either through the graphical software center if it's available, or through the command line with:
    
    ```bash
    sudo apt install ./<file>.deb
    
    # If you're on an older Linux distribution, you will need to run this instead:
    # sudo dpkg -i <file>.deb
    # sudo apt-get install -f # Install dependencies
    ```
    
    Note that other binaries are also available on the [VS Code download page](https://code.visualstudio.com/Download).
    
    Installing the .deb package will automatically install the apt repository and signing key to enable auto-updating using the system's package manager. Alternatively, the repository and key can also be installed manually with the following script:
    
    ```bash
    sudo apt-get install wget gpg
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
    sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings
    sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
    rm -f packages.microsoft.gpg
    ```
    
    Then update the package cache and install the package using:
    
    ```bash
    sudo apt install apt-transport-https
    sudo apt update
    sudo apt install code # or code-insiders
    ```
    
    **RHEL, Fedora, and CentOS based distributions**
    
    We currently ship the stable 64-bit VS Code in a yum repository, the following script will install the key and repository:
    
    ```bash
    sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
    sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
    ```
    
    Then update the package cache and install the package using `dnf` (Fedora 22 and above):
    
    ```bash
    dnf check-update
    sudo dnf install code
    ```
    
    Or on older versions using `yum`:
    
    Due to the manual signing process and the system we use to publish, the yum repo may lag behind and not get the latest version of VS Code immediately.
    
    **Snap**
    
    Visual Studio Code is officially distributed as a Snap package in the [Snap Store](https://snapcraft.io/store):
    
    You can install it by running:
    
    ```bash
    sudo snap install --classic code # or code-insiders
    ```
    
    Once installed, the Snap daemon will take care of automatically updating VS Code in the background. You will get an in-product update notification whenever a new update is available.
    
    **Note:** If `snap` isn't available in your Linux distribution, please check the following [Installing snapd guide](https://docs.snapcraft.io/installing-snapd), which can help you get that set up.
    
    Learn more about snaps from the [official Snap Documentation](https://docs.snapcraft.io/).
    
    **openSUSE and SLE-based distributions**
    
    The yum repository above also works for openSUSE and SLE-based systems, the following script will install the key and repository:
    
    ```bash
    sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
    sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/zypp/repos.d/vscode.repo'
    ```
    
    Then update the package cache and install the package using:
    
    ```bash
    sudo zypper refresh
    sudo zypper install code
    ```
    
    **AUR package for Arch Linux**
    
    There is a community-maintained [Arch User Repository package for VS Code](https://aur.archlinux.org/packages/visual-studio-code-bin).
    
    To get more information about the installation from the AUR, please consult the following wiki entry: [Install AUR Packages](https://wiki.archlinux.org/index.php/Arch_User_Repository#Build_and_install_the_package).
    
    **Nix package for NixOS (or any Linux distribution using Nix package manager)**
    
    There is a community maintained [VS Code Nix package](https://github.com/NixOS/nixpkgs/blob/master/pkgs/applications/editors/vscode/vscode.nix) in the nixpkgs repository. In order to install it using Nix, set `allowUnfree` option to true in your `config.nix` and execute:
    
    ```bash
    nix-env -i vscode
    ```
    
    **Installing .rpm package manually**
    
    The [VS Code .rpm package (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760867) can also be manually downloaded and installed, however, auto-updating won't work unless the repository above is installed. Once downloaded it can be installed using your package manager, for example with `dnf`:
    
    ```bash
    sudo dnf install <file>.rpm
    ```
    
    Note that other binaries are also available on the [VS Code download page](https://code.visualstudio.com/Download).

    Note: This part of the book is from the Visual Studio Code Docs page at the time of writing this book. I recommend that you check the official docs page to make sure you are working latest updates of the docs