# DITA-OT Plugins

Documentation for a series of plug-in for DITA Open Toolkit that extends the default processing 
with additional functionality.

Each DITA-OT Plug-in has been tested against DITA-OT 4.x. It is recommended that you upgrade to 
the latest version. Detailed instructions for installing each plug-in can be found in the relevant 
section of the documentation.

:books: [Documentation](https://jason-fox.github.io/dita-ot-plugins/)


## Installing DITA-OT

DITA Open Toolkit, or DITA-OT for short, is a set of Java-based, open-source tools that provide 
processing for content authored in the Darwin Information Typing Architecture.Full installation 
instructions for downloading DITA-OT can be found [here](https://www.dita-ot.org/4.0/topics/installing-client.html).

-  Download the `dita-ot-4.0.zip` package from the project website at
   [dita-ot.org/download](https://www.dita-ot.org/download)
- Extract the contents of the package to the directory where you want to install DITA-OT.
-  Optional: Add the absolute path for the bin directory to the PATH system variable.

This defines the necessary environment variable to run the dita command from the command line.

```console
curl -LO https://github.com/dita-ot/dita-ot/releases/download/4.0/dita-ot-4.0.zip
unzip -q dita-ot-4.0.zip
rm dita-ot-4.0.zip
```
