FROM UBUNTU
RUN apt-get update && apt-get upgrade -y
RUN apt install -y git curl wget 
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
RUN sudo apt install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . . 

EXPOSE 3000 
CMD ["npm", "start"]