import React from 'react'

interface LogoBeardedManProps {
  size: number
}

const LogoBeardedMan = (props: LogoBeardedManProps) => {
  return (
    <svg width={props.size} height={props.size} viewBox='0 0 274 271' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10 57V228.27L208.602 235L271 57H10Z' fill='white' stroke='#A7A7A7' strokeWidth='3' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M158.444 131.786C156.833 125.04 155.351 122.179 152.489 119.834C149.811 117.641 145.903 115.798 140.201 114.453C134.261 113.332 134.093 109.999 132.604 104.643C132.169 103.033 130.016 102.604 129.087 103.765C128.956 103.612 128.82 103.472 128.678 103.346C128.805 102.578 127.769 100.377 127.804 99.6423C128.165 91.9748 125.842 88.1244 120.044 86.6931C118.783 86.3817 110.218 86.1984 108.988 86.5654C103.613 88.1697 98.322 93.2634 99.1317 99.3996C97.4445 101.78 95.7932 103.233 93.1902 104C87.3974 104.794 81.6051 105.5 75.8108 106.104C64.4685 108.025 53.8342 114.506 46.5659 123.959C45.8955 124.831 45.7019 126.016 46.2935 126.946C45.8301 129.089 43.2211 134.288 45.2739 135.757C41.8982 144.473 34.1312 161.32 34.1167 166.133C34.0554 186.353 36.0786 212.671 54.5602 223.86C55.3002 224.646 55.4061 225.515 55.7265 226.683C56.539 230.364 59.4899 232.995 62.7197 232.78C78.6306 233.162 94.0414 231.067 109.953 230.965C116.969 230.92 125.408 232.051 131.503 232.804C137.599 233.558 143.752 232.891 149.602 230.965C150.095 231.803 151.092 232.292 152.104 232.051C158.168 230.75 163.072 226.716 167.343 222.307C168.648 219.743 173.745 212.44 171.719 209.898C173.556 201.516 173.46 192.509 170.196 184.528C170.659 183.065 169.816 181.457 170.196 179.946C170.472 178.852 171.177 178.4 171.532 177.317C172.032 175.794 171.489 173.75 170.926 172.195C170.696 171.42 171.35 170.586 171.532 169.796C172.396 166.067 170.419 166.395 168.994 163.902C169.015 163.894 169.386 162.115 169.384 162.124C169.602 160.853 169.056 159.225 168.579 158.164C168.257 157.447 167.567 156.999 166.881 157.081C167.572 154.55 168.445 152.444 169.384 150.005C171.045 145.706 173.148 141.59 175.533 137.699C176.51 136.105 175.198 134.26 173.618 134.151C168.501 133.8 163.441 133.005 158.444 131.786Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M143.512 164.294C141.465 163.428 139.262 162.949 137.047 162.763C138.239 162.538 139.435 162.32 140.641 162.208C141.482 162.131 142.262 162.139 142.894 162.827C143.316 163.286 143.513 163.877 143.791 164.42C143.7 164.376 143.606 164.334 143.512 164.294ZM165.477 156.194C162.125 156.378 158.77 157.238 155.738 158.797C154.498 159.436 153.374 160.358 153.045 161.875C152.878 162.65 152.919 163.45 153.008 164.233C153.074 164.825 153.091 165.582 153.568 165.983C153.649 166.051 153.736 166.103 153.827 166.141C152.708 166.686 151.643 167.341 150.697 168.015C149.832 168.632 148.943 169.582 148.543 170.654C148.51 170.532 148.477 170.419 148.444 170.311C147.763 168.139 146.715 166.361 145.064 165.165C145.357 165.023 145.558 164.688 145.464 164.225C145.072 162.29 143.417 160.61 141.548 160.729C139.502 160.859 137.304 161.664 135.453 162.68C134.779 162.664 134.106 162.674 133.44 162.705C133.326 162.709 133.331 162.877 133.44 162.891C133.98 162.965 134.52 163.047 135.06 163.143C136.343 163.364 137.622 163.646 138.873 163.995C140.375 164.414 141.927 164.835 143.33 165.568C146.051 166.991 147.736 170.712 147.39 173.949C147.333 174.48 147.142 176.085 146.46 175.92C145.883 175.78 145.654 174.48 145.453 173.999C144.913 172.722 143.94 171.887 142.774 171.323C141.404 170.658 139.938 170.209 138.518 169.686C137.714 169.389 136.91 169.091 136.104 168.796C135.28 168.49 134.496 168.069 133.618 168.283C133.087 168.412 133.026 169.095 133.324 169.486C133.777 170.083 134.45 170.259 135.102 170.504C135.964 170.828 136.823 171.151 137.683 171.474C139.012 171.973 140.404 172.394 141.7 173.005L141.659 173.105C141.554 173.073 141.43 173.187 141.45 173.327C141.645 174.618 141.914 176.111 141.615 177.405C141.378 178.431 140.544 179.567 139.461 179.265C139.631 179.097 139.694 178.808 139.58 178.54C139.151 177.55 133.531 173.642 133.03 175.093C133.013 175.145 133.065 175.183 133.106 175.175C133.533 175.079 134.248 175.866 134.59 176.115C135.084 176.475 135.585 176.826 136.073 177.195C136.607 177.598 137.128 178.022 137.637 178.459C138.036 178.802 138.337 179.159 138.796 179.333C138.556 179.457 138.365 179.686 138.284 179.98C138.077 180.744 137.677 181.393 136.984 181.73C136.258 182.081 135.439 181.86 134.674 181.946C133.631 182.06 132.721 182.595 131.962 183.359C130.366 184.968 129.566 187.802 127.335 188.563C126.002 189.016 124.523 188.73 123.173 188.525C121.667 188.295 120.199 188.114 118.681 188.353C117.228 188.583 115.855 189.126 114.528 189.788C113.283 190.409 111.908 191.112 110.804 192.038C110.577 191.281 110.348 190.533 110.174 189.76C109.764 187.934 109.542 186.074 109.488 184.197C109.438 182.411 109.531 180.617 109.673 178.838C109.743 177.95 109.854 177.065 109.925 176.177C109.943 175.954 109.98 175.714 110.008 175.475C111.978 174.219 114.049 173.257 116.136 172.267C116.141 172.265 116.147 172.261 116.152 172.259C116.217 172.227 116.28 172.197 116.345 172.167C116.343 172.163 116.341 172.159 116.337 172.155C116.576 171.997 116.742 171.788 116.842 171.552C119.85 169.398 122.364 166.458 124.238 163.029C125.024 161.592 125.78 160.101 126.808 158.841C127.902 157.498 129.202 156.699 130.81 156.284C132.69 155.797 134.627 155.506 136.554 155.34C137.605 155.25 138.781 155.11 139.927 155.117C140.726 155.122 141.508 155.196 142.225 155.41C143.288 155.725 143.909 156.598 144.576 157.48C145.214 158.326 145.848 159.175 146.443 160.057C147.007 160.893 147.54 161.757 148.002 162.664C148.279 163.207 148.536 163.766 148.752 164.342C148.828 164.546 148.928 164.777 148.974 164.989C149.02 165.203 148.935 165.428 149.157 165.428C148.242 165.442 148.251 167.021 149.161 166.963C152.721 166.74 147.621 159.234 146.876 158.188C145.82 156.707 144.732 154.775 143.042 154.086C143.018 154.076 142.992 154.067 142.968 154.058C143.46 153.555 143.848 152.953 144.22 152.34C144.602 151.709 145.059 150.986 145.185 150.238C145.264 149.761 144.715 149.489 144.454 149.907C144.075 150.515 143.892 151.286 143.61 151.955C143.321 152.633 142.97 153.274 142.693 153.959C142.025 153.737 141.304 153.635 140.571 153.602C141.497 152.248 143.079 149.637 143.269 149.302C144.146 147.749 144.979 146.148 145.776 144.545C146.637 142.809 147.375 141 148.2 139.243C148.667 138.248 149.139 137.243 149.658 136.277C149.838 135.946 150.03 135.615 150.248 135.313C150.29 135.254 150.344 135.204 150.394 135.148C150.451 135.114 150.51 135.076 150.544 135.056C150.843 134.87 150.949 134.439 151.159 134.165C151.496 133.725 151.891 133.673 152.398 133.666C153.477 133.654 154.561 133.7 155.638 133.732C157.223 133.78 158.805 133.848 160.387 133.938C160.866 133.966 161.343 133.994 161.822 134.026C164.123 134.174 166.423 134.367 168.717 134.605C170.747 134.814 172.777 135.156 174.808 135.319C172.058 142.376 169.007 149.304 165.554 155.991C165.519 156.059 165.493 156.126 165.477 156.194ZM150.215 174.373C149.771 174.592 149.34 174.866 148.939 175.177C149.006 174.692 149.022 174.181 149.004 173.668C149.335 174.051 149.758 174.271 150.215 174.373ZM169.153 162.235C169.122 162.238 169.092 162.256 169.078 162.29C168.464 163.658 168.721 165.185 169.723 166.257C170.248 166.815 171.392 167.446 171.355 168.364C171.324 169.107 170.575 169.73 170.255 170.343C169.958 170.913 169.847 171.54 170.085 172.159C170.39 172.951 171.242 173.267 171.534 174.045C171.904 175.033 171.303 176.225 170.882 177.085C170.49 177.882 169.983 178.678 169.647 179.521C167.394 180.78 165.377 182.712 163.643 184.675C161.744 186.82 160.116 189.345 157.101 189.282C156.799 189.275 156.57 189.447 156.433 189.685C155.594 189.727 154.753 189.744 153.914 189.749C152.438 189.756 150.963 189.74 149.49 189.691C149.386 189.305 149.462 188.783 149.457 188.457C149.438 187.409 149.429 186.363 149.388 185.315C149.377 185.024 149.366 184.73 149.355 184.439C149.886 185.475 150.921 185.946 152.1 185.874C153.997 185.754 155.905 185.419 157.783 185.118C158.772 184.96 159.759 184.78 160.744 184.589C161.554 184.433 162.696 184.473 163.262 183.772C163.395 183.609 163.402 183.309 163.194 183.199C162.633 182.902 162.28 183.068 161.665 183.196C160.914 183.353 160.162 183.503 159.407 183.643C157.96 183.914 156.509 184.165 155.054 184.387C154.226 184.513 153.396 184.636 152.566 184.734C151.841 184.818 151.024 184.932 150.44 184.343C149.263 183.153 149.923 181.159 150.668 179.958C150.682 179.934 150.682 179.912 150.677 179.892C151.379 179.714 152.08 179.507 152.779 179.361C154.123 179.081 155.476 178.846 156.831 178.636C159.615 178.207 162.417 177.924 165.216 177.638C165.909 177.566 165.916 176.389 165.216 176.459C161.195 176.856 157.154 177.233 153.187 178.07C152.193 178.277 151.205 178.512 150.224 178.778C149.76 178.902 149.263 179.096 148.776 179.102C148.747 179.102 148.717 179.102 148.688 179.099C147.736 179.068 147.597 178.187 148.12 177.455C148.185 177.365 148.251 177.275 148.32 177.189C149.244 175.999 150.396 175.205 151.582 174.383C152.912 174.187 154.237 173.752 155.539 173.432C158.751 172.642 161.964 171.852 165.179 171.063C165.809 170.907 165.541 169.861 164.911 170.015C162.471 170.612 160.031 171.209 157.59 171.806L154.019 172.68C153.305 172.854 152.414 173.203 151.575 173.329C151.161 173.391 150.76 173.399 150.398 173.307C149.227 173.007 149.168 171.428 149.673 170.49C150.239 169.436 151.307 168.778 152.255 168.181C153.899 167.145 155.648 166.4 157.356 165.542C157.659 165.47 157.962 165.398 158.265 165.326C160.029 164.907 162.044 164.702 163.704 163.933C164.201 163.706 163.929 162.859 163.438 162.871C162.149 162.901 160.802 163.396 159.543 163.69C158.18 164.009 156.816 164.326 155.454 164.644C155.317 164.676 154.507 164.955 154.385 164.893C154.307 164.853 154.28 164.562 154.254 164.37C154.17 163.739 154.11 163.077 154.2 162.444C154.4 161.025 155.496 160.358 156.605 159.813C159.075 158.602 161.783 157.843 164.478 157.54C165.099 157.47 165.721 157.426 166.345 157.404C167.079 157.38 167.684 157.24 168.055 158.021C168.64 159.25 168.961 160.831 169.153 162.235ZM165.724 206.816C165.185 204.806 165.332 202.661 164.963 200.611C164.773 199.553 164.513 198.504 164.23 197.472C164.001 196.638 163.619 195.751 163.576 194.88C163.573 194.822 163.637 194.789 163.68 194.816C164.44 195.285 165.023 196.3 165.456 197.096C165.974 198.05 166.37 199.048 166.689 200.097C167.325 202.187 167.848 204.709 167.027 206.816C166.783 207.443 165.925 207.569 165.724 206.816ZM149.093 180.197C149.547 180.149 150.002 180.055 150.457 179.946C149.948 180.481 149.479 181.125 149.218 181.84C149.178 181.291 149.126 180.744 149.057 180.199C149.068 180.199 149.081 180.199 149.093 180.197ZM144.722 222.029C143.92 221.425 143.336 220.58 142.656 219.835C141.987 219.102 143.032 217.973 143.701 218.706C144.282 219.342 144.785 220.136 145.468 220.65C145.797 220.898 145.949 221.345 145.734 221.743C145.543 222.094 145.05 222.276 144.722 222.029ZM140.25 198.806C141.714 198.122 143.154 197.378 144.686 196.885C145.601 196.591 145.989 198.133 145.079 198.425C143.668 198.879 142.344 199.555 140.996 200.184C140.131 200.588 139.379 199.212 140.25 198.806ZM124.79 198.327C124.432 197.374 125.863 196.963 126.216 197.903C126.622 198.985 127.088 200.04 127.494 201.122C127.852 202.076 126.421 202.487 126.068 201.547C125.662 200.464 125.196 199.41 124.79 198.327ZM109.531 217.374C109.293 217.717 108.895 217.903 108.519 217.66C108.205 217.457 108.013 216.915 108.254 216.568C108.959 215.553 109.673 214.551 110.499 213.647C111.169 212.914 112.214 214.044 111.545 214.776C110.807 215.584 110.161 216.468 109.531 217.374ZM107.349 110.505C108.028 111.006 108.623 111.614 109.203 112.24C109.877 112.967 108.831 114.096 108.157 113.369C107.668 112.841 107.175 112.306 106.603 111.884C106.272 111.64 106.123 111.186 106.337 110.791C106.529 110.438 107.019 110.262 107.349 110.505ZM129.549 136.202C129.165 137.032 128.82 137.845 128.798 138.788C128.775 139.816 127.296 139.816 127.319 138.788C127.348 137.554 127.769 136.484 128.272 135.396C128.698 134.475 129.973 135.285 129.549 136.202ZM137.694 115.564C138.489 114.992 139.229 116.376 138.441 116.943C137.802 117.403 137.163 117.863 136.524 118.323C135.729 118.895 134.99 117.511 135.778 116.944C136.417 116.484 137.055 116.024 137.694 115.564ZM102.365 151.648C102.229 152.663 100.804 152.228 100.939 151.223C101.147 149.67 101.401 148.137 101.791 146.624C102.046 145.634 103.472 146.057 103.217 147.049C102.827 148.562 102.573 150.095 102.365 151.648ZM97.1798 169.94C96.228 169.918 96.2278 168.321 97.1798 168.343C98.0413 168.363 98.8881 168.608 99.719 168.831C100.643 169.081 100.249 170.62 99.3259 170.371C98.6234 170.182 97.9082 169.957 97.1798 169.94ZM95.2658 206.788C94.9388 206.96 94.6033 207.114 94.2727 207.277C93.6108 207.604 92.9491 207.931 92.2877 208.259C90.9098 208.942 89.5326 209.628 88.1567 210.315C85.4023 211.692 82.6266 213.02 79.8656 214.382C77.05 215.771 74.2418 217.178 71.4371 218.593C70.1157 219.259 68.7844 219.9 67.4556 220.549C66.3194 221.104 64.9151 222.073 63.6678 222.164C63.6037 222.169 63.5822 222.081 63.6188 222.037C64.09 221.458 64.8417 221.121 65.461 220.745C66.0935 220.361 66.738 219.999 67.3794 219.633C68.7167 218.868 70.0556 218.109 71.4058 217.371C74.1066 215.895 76.8126 214.43 79.5191 212.966C82.2794 211.474 85.0362 209.971 87.8208 208.532C89.1318 207.854 90.4441 207.178 91.7572 206.505C92.4685 206.14 93.1802 205.776 93.8919 205.412C94.1993 205.255 94.5036 205.085 94.8179 204.945C95.2355 204.758 95.5529 204.796 95.9836 204.681C96.6861 204.494 96.9902 205.459 96.4509 205.879C96.0069 206.225 95.7732 206.52 95.2658 206.788ZM85.393 223.162C85.2412 222.764 85.559 222.279 85.9095 222.179C86.3293 222.06 86.666 222.336 86.8192 222.737C87.2246 223.802 87.8021 224.779 88.5454 225.604C89.2098 226.342 88.1646 227.471 87.4997 226.734C86.5682 225.699 85.899 224.49 85.393 223.162ZM78.1297 197.53C77.4555 196.802 78.5015 195.673 79.1755 196.401L81.0921 198.47C81.7663 199.198 80.7201 200.327 80.0463 199.599L78.1297 197.53ZM58.4663 194.156C57.0883 194.592 55.4811 194.993 54.5417 196.263C54.4958 196.325 54.4188 196.245 54.4463 196.183C55.649 193.491 59.0981 192.547 61.4861 191.603C63.1752 190.936 64.9082 190.383 66.6559 189.889C66.4812 187.736 66.9629 185.429 67.1304 183.286C67.3092 180.999 67.4547 178.706 67.5293 176.412C67.6057 174.071 67.6242 171.715 67.5528 169.374C67.4818 167.042 67.2014 164.738 67.0787 162.413C67.0668 162.188 67.3567 162.178 67.4192 162.364C68.1449 164.521 68.4549 166.91 68.6912 169.185C68.9345 171.528 69.0152 173.864 68.9842 176.221C68.952 178.644 68.8215 181.062 68.6424 183.477C68.5575 184.622 68.459 185.766 68.366 186.91C68.295 187.783 68.2621 188.649 68.0972 189.494C69.1513 189.215 70.2078 188.951 71.2609 188.694C74.6191 187.876 77.9913 187.116 81.3354 186.232C82.9769 185.797 84.595 185.277 86.2291 184.815C87.7679 184.38 89.3921 183.853 90.9719 183.659C91.5357 183.59 91.6074 184.422 91.2342 184.705C89.9502 185.678 88.2448 186.356 86.7617 186.901C85.2732 187.448 83.726 187.841 82.2003 188.246C79.0187 189.091 75.807 189.782 72.6 190.502C69.3975 191.221 66.1889 191.934 63.0225 192.821C61.4976 193.248 59.9778 193.677 58.4663 194.156ZM50.9153 151.435C50.0919 151.957 49.3486 150.576 50.169 150.056C51.2425 149.376 52.3866 148.865 53.5399 148.366C54.425 147.984 54.8059 149.529 53.9331 149.906C52.8966 150.354 51.8799 150.824 50.9153 151.435ZM47.9339 210.762C47.1083 211.279 46.3645 209.898 47.1876 209.383C48.3437 208.659 49.6098 208.177 50.8079 207.543C51.6603 207.093 52.409 208.471 51.5542 208.922C50.3563 209.555 49.09 210.038 47.9339 210.762ZM46.5929 177.085C47.3912 177.904 48.4565 178.289 49.461 178.719C50.3369 179.094 49.9528 180.638 49.0678 180.259C47.8163 179.723 46.5415 179.234 45.5472 178.214C44.8554 177.505 45.903 176.377 46.5929 177.085ZM55.4238 131.35C56.3014 131.721 55.917 133.265 55.0306 132.89C54.0476 132.473 53.0323 132.156 52.0492 131.74C51.1719 131.368 51.556 129.825 52.4424 130.2C53.4255 130.616 54.4408 130.933 55.4238 131.35ZM71.0025 113.184C71.9349 113.014 72.332 114.553 71.3957 114.724C70.234 114.936 69.0901 115.183 67.9883 115.644C67.0986 116.015 66.7169 114.471 67.5952 114.104C68.6971 113.643 69.841 113.396 71.0025 113.184ZM76.1499 157.414C75.2949 156.96 76.0451 155.583 76.8962 156.035C77.7931 156.511 78.7224 156.879 79.701 157.104C80.6329 157.318 80.236 158.858 79.3078 158.644C78.2064 158.391 77.1585 157.949 76.1499 157.414ZM81.0115 132.5C81.9321 132.227 82.3214 133.768 81.4047 134.039C79.7918 134.517 78.1312 134.765 76.5065 135.189C75.5805 135.431 75.1888 133.891 76.1133 133.649C77.738 133.225 79.3988 132.977 81.0115 132.5ZM101.635 124.681C102.572 124.868 102.173 126.407 101.242 126.221C100.252 126.023 99.2486 126.02 98.2446 126.02C97.2915 126.019 97.2931 124.422 98.2446 124.423C99.3852 124.423 100.511 124.457 101.635 124.681ZM168.898 133.024C166.482 132.774 164.062 132.575 161.639 132.425C161.526 132.419 161.415 132.411 161.302 132.405C161.29 132.377 161.273 132.351 161.256 132.323C160.465 131.07 159.883 129.816 159.378 128.399C158.896 127.049 158.428 125.658 157.685 124.441C156.837 123.053 155.693 121.968 154.439 121.027C153.678 121.58 152.972 122.226 152.326 122.912C151.647 123.633 150.601 122.504 151.281 121.783C151.855 121.173 152.467 120.611 153.115 120.102C152.367 119.612 151.604 119.15 150.86 118.692C148.07 116.973 145.214 115.384 142.299 113.931C140.944 113.254 139.572 112.654 138.191 112.045C137.448 111.718 136.714 111.296 135.971 110.917C136.025 110.35 135.868 109.715 135.465 109.342C135.167 109.069 134.936 108.967 134.581 108.773C134.502 108.743 134.454 108.725 134.431 108.715C134.448 108.719 134.496 108.735 134.575 108.763C134.764 108.857 134.779 108.829 134.62 108.681C134.611 108.358 134.021 107.676 133.886 107.342C133.416 106.198 133.27 104.989 132.577 103.947C131.621 102.512 130.017 101.969 128.521 102.456C128.366 100.729 128.325 98.9267 127.723 97.3856C127.706 97.3438 127.653 97.3257 127.629 97.3716C127 98.5275 126.946 99.8148 126.898 101.148C126.852 102.4 126.896 103.679 127.048 104.923C126.952 105.003 126.854 105.079 126.752 105.152C126.275 105.492 125.761 105.753 125.222 105.947C124.194 106.314 123.116 106.474 122.038 106.53C119.256 106.673 116.389 106.37 113.653 105.855C110.886 105.334 106.643 104.552 104.181 103.056C102.556 102.071 101.057 100.867 99.5372 99.701C100.088 97.7848 100.229 95.7248 99.6741 94.106C99.6076 93.9124 99.3266 93.8764 99.273 94.106C98.9255 95.651 98.8238 97.2039 98.3616 98.7309C98.3542 98.7529 98.3468 98.777 98.3394 98.7988C98.1953 98.6932 98.0511 98.5892 97.9069 98.4854C97.5741 98.2479 97.1212 98.4257 96.9216 98.7649C93.7289 104.196 88.6732 104.508 83.364 105.478C77.5537 106.54 71.7142 107.685 66.1277 109.763C60.7853 111.752 55.6795 114.646 51.6348 118.969C50.7192 119.948 49.8629 120.991 49.0547 122.08C49.8367 122.187 50.6121 122.352 51.3776 122.612C52.284 122.919 51.8945 124.46 50.9845 124.152C50.0006 123.818 49.0059 123.653 48.001 123.571C45.2527 127.63 43.1098 132.233 41.2568 136.764C37.7025 145.452 35.389 154.703 34.3244 164.122C34.9089 163.744 35.504 163.383 36.1138 163.048C36.9612 162.583 37.7086 163.961 36.8603 164.427C35.9182 164.944 35.0032 165.515 34.1166 166.133C33.7293 170.256 33.5792 174.406 33.6702 178.548C33.8865 188.425 35.1213 198.591 37.9145 208.015C39.2843 212.64 41.0997 217.227 43.8042 221.135C45.0279 222.905 46.4181 224.502 48.0559 225.834C48.849 226.48 49.6882 227.058 50.5737 227.544C51.7143 228.175 53.2005 228.383 54.184 229.275C54.5075 229.569 54.7571 229.956 54.9456 230.393C54.8365 231.223 54.8236 232.056 55.0343 232.886C55.1009 233.146 55.2821 233.357 55.5057 233.459C55.5094 233.531 55.5094 233.6 55.5094 233.668C55.5094 233.7 55.5538 233.708 55.5593 233.677C55.5686 233.614 55.5778 233.553 55.5871 233.489C55.6592 233.515 55.735 233.527 55.8126 233.527C58.6206 233.538 61.4321 233.464 64.2438 233.361C64.0264 232.642 63.7909 231.929 63.5649 231.21C63.2578 230.233 64.6866 229.818 64.9909 230.786C65.2554 231.626 65.5319 232.46 65.778 233.303C68.7906 233.182 71.8024 233.037 74.8087 232.93C81.203 232.7 87.5954 232.624 93.9914 232.479C103.924 232.252 113.929 231.786 123.877 232.241C124.221 231.453 124.606 230.683 124.971 229.905C125.402 228.987 126.677 229.796 126.248 230.711C125.994 231.251 125.732 231.785 125.482 232.324C127.497 232.437 129.509 232.586 131.518 232.79C134.945 233.137 138.339 233.754 141.763 234.138C145.244 234.529 148.649 234.459 152.102 233.838C152.723 233.726 153.089 233.321 153.241 232.818C153.246 232.816 153.25 232.812 153.254 232.806C153.431 232.582 153.598 232.397 153.769 232.235C153.975 232.092 154.196 231.97 154.457 231.862C154.943 231.662 155.45 231.541 155.964 231.459C156.529 231.367 157.102 231.359 157.668 231.283C158.145 231.217 158.611 231.119 159.077 231C159.914 230.784 160.709 230.503 161.5 230.129C162.19 229.804 162.813 229.337 163.401 228.828C164.617 227.868 165.671 226.642 166.591 225.369C167.127 224.624 167.632 223.852 168.091 223.047C168.889 221.654 169.569 220.207 170.257 218.748C170.507 218.315 170.734 217.873 170.943 217.42C169.599 216.993 168.242 216.644 166.817 216.62C165.865 216.603 165.865 215.006 166.817 215.023C168.451 215.051 169.997 215.463 171.532 215.954C171.607 215.74 171.679 215.523 171.745 215.304C171.928 214.847 172.08 214.378 172.205 213.903C172.279 213.688 172.353 213.472 172.427 213.256C172.594 212.51 172.76 211.761 172.928 211.013C173.263 209.815 173.527 208.599 173.721 207.368C173.884 206.558 174.01 205.741 174.095 204.915C174.354 202.913 174.564 200.915 174.579 198.891C174.557 197.643 174.483 196.397 174.357 195.158C174.304 194.316 174.213 193.477 174.091 192.645C173.932 191.407 173.775 190.182 173.511 188.96C173.313 188.134 173.115 187.307 172.917 186.481C172.424 184.758 171.841 183.07 171.17 181.419C171.133 181.315 170.946 181.087 170.834 181.085C170.749 181.083 170.63 181.167 170.669 181.279C170.673 181.289 170.676 181.301 170.68 181.311C170.642 181.217 170.605 181.121 170.566 181.028C170.533 180.94 170.403 180.764 170.303 180.766C170.298 180.766 170.292 180.766 170.285 180.768C170.311 180.748 170.335 180.722 170.359 180.692C171.022 179.844 171.453 178.728 171.928 177.746C172.322 176.936 172.693 176.081 172.801 175.165C172.895 174.361 172.767 173.568 172.3 172.917C171.767 172.177 170.765 171.83 171.322 170.76C171.954 169.542 172.884 168.486 171.958 167.103C171.486 166.398 170.74 166.011 170.185 165.398C169.547 164.69 169.244 163.741 169.261 162.773C169.299 162.797 169.351 162.786 169.37 162.725C169.906 160.977 169.518 159.057 168.969 157.354C168.669 156.43 168.035 156.176 167.297 156.131C170.492 149.394 173.481 142.549 176.145 135.547C176.234 135.317 176.32 135.088 176.407 134.858C176.537 134.515 176.263 134.058 175.947 133.982C173.644 133.437 171.244 133.263 168.898 133.024Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M141.447 63.6884C141.047 60.2857 141.565 53.1733 141.6 52.7413C141.819 50.0096 140.496 39.2226 137.993 40.2165C133.796 37.0034 128.205 36.2939 122.977 35.955C112.118 35.2509 100.566 36.8672 92.1807 43.9335C88.0339 47.6031 83.9968 52.9404 84.3213 58.4977C80.5537 63.7653 75.2422 70.9912 79.9365 77.1495C81.5322 79.117 84.0682 79.8497 86.0728 81.3397C90.1047 84.4843 92.6343 88.9971 96.7045 92.123C107.488 101.492 125.798 103.45 136.393 92.7927C144.585 85.0745 143.26 73.5278 141.819 63.6884C140.851 57.0732 142.229 70.3267 141.447 63.6884Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M108.471 21.5252C111.375 20.9585 114.357 20.6059 117.323 20.7121L117.552 20.7206C119.783 20.8069 122.609 20.9976 124.556 22.2523C124.668 22.1437 124.848 22.0879 125.011 22.1633C127.324 23.2309 129.869 24.0029 132.304 24.7699C134.729 25.5332 137.244 26.0371 139.786 26.2402C140.742 26.3167 141.56 27.3149 140.954 28.2102C140.81 28.4236 140.67 28.6391 140.53 28.8551C140.764 28.8316 140.998 28.8073 141.231 28.7844C142 28.7096 142.769 29.5031 142.723 30.227C142.695 30.6823 142.644 31.1322 142.569 31.5768C142.861 31.5708 143.153 31.6133 143.434 31.7282C144.858 32.3098 144.759 33.9503 144.653 35.1984C144.505 36.9304 143.835 38.765 142.591 40.0613C143.52 40.994 144.177 42.1079 144.569 43.4309C144.854 44.3969 145.012 45.4259 144.934 46.4315L144.909 46.7326C144.812 47.8239 144.62 49.0321 143.808 49.8171C143.392 50.2219 142.878 50.3694 142.389 50.3226C142.685 52.8376 142.874 55.3669 143.053 57.8872L143.137 59.0918C143.535 64.9167 143.835 70.7796 143.756 76.6142C143.684 82.0668 142.569 87.3592 139.111 91.7864C135.961 95.8179 131.438 98.7897 126.322 99.9195C123.565 100.529 120.75 100.572 117.959 100.184C116.606 99.995 115.245 99.7054 113.961 99.2485C112.54 98.7411 111.518 97.9946 110.562 96.8756C110.11 96.345 110.327 95.2152 111.228 95.3214C112.59 95.4811 113.834 95.6735 115.139 96.0631L115.326 96.1201C116.627 96.5231 117.974 96.8235 119.334 96.9512C122.119 97.2121 124.947 96.9494 127.615 96.1327C131.959 94.8015 135.701 91.835 138.099 88.1076C140.945 83.6894 141.267 78.674 141.226 73.5938C141.182 68.0191 140.994 62.4412 140.688 56.8724L140.636 55.9443C140.474 53.0786 140.318 50.2111 140.181 47.3436C140.138 46.4441 140.073 45.5374 139.955 44.6398C138.882 44.0317 137.92 43.1934 137.293 42.159C136.034 42.6627 134.709 43.0261 133.49 43.3158C130.667 43.9871 127.736 44.1501 124.863 43.7297C124.087 44.0393 123.297 44.3115 122.494 44.5457C122.277 44.6387 122.061 44.7301 121.844 44.8197C119.909 45.6202 117.946 46.2984 115.903 46.7949L115.402 46.9159C114.327 47.1721 113.159 47.4245 112.015 47.5037C111.827 47.5739 111.624 47.6332 111.403 47.6854C110.361 47.93 109.28 48.0074 108.212 47.921C107.172 47.8365 106.42 46.8201 106.993 45.8685C107.412 45.1741 107.834 44.4815 108.261 43.7907C106.778 44.3879 105.247 44.8844 103.702 45.3054C102.143 45.7299 100.562 46.0879 98.9785 46.4171C98.132 46.5916 97.2819 46.7463 96.4373 46.9208C95.8326 47.045 94.9042 47.1097 94.411 47.4947C93.8661 47.9174 93.7117 48.9033 93.505 49.5113C93.2334 50.301 92.9785 51.0944 92.7459 51.8967C92.2828 53.4978 91.9033 55.1222 91.6094 56.7628C91.3154 58.4053 91.118 60.0639 91.0082 61.7279C90.8987 63.3901 90.9468 65.0632 90.7703 66.7182C90.6752 67.5961 89.7005 68.0476 88.9805 67.4342C88.8961 67.3622 88.8109 67.2895 88.7266 67.2159L88.601 67.105C87.985 66.5653 87.3878 65.9932 86.8949 65.3492C86.8056 65.2305 86.7201 65.1063 86.6401 64.9804C86.627 64.9804 86.6159 64.9768 86.6028 64.9678L86.4662 64.8684C84.9615 63.7855 82.4477 62.3736 80.9805 64.1727C80.513 64.7458 80.2736 65.4756 80.075 66.1797L79.7264 67.4397C79.5009 68.2623 79.2887 69.0894 79.1645 69.9311C78.8836 71.8164 79.025 73.9895 80.3666 75.5006C80.9024 76.1051 81.641 76.5368 82.465 76.6502C82.9247 76.7113 83.3787 76.6358 83.8345 76.58C84.2977 76.5242 84.7441 76.6142 85.2075 76.571C85.9442 76.5008 86.2661 77.3535 85.9908 77.8896C85.8419 78.1774 85.6668 78.4257 85.468 78.6362C85.6278 78.7693 85.7805 78.9132 85.9275 79.0643C86.3628 79.1992 86.7534 79.4889 87.0456 79.8721C87.2819 80.1815 87.4045 80.5179 87.4252 80.8723C87.451 80.9604 87.4734 81.0504 87.494 81.1421L87.8932 81.7685C87.9809 81.9059 88.0684 82.0416 88.1561 82.1747C89.172 83.7218 90.2996 85.0314 91.7005 86.2655C93.0494 87.4528 94.5134 88.516 95.7805 89.7896L95.9298 89.9408C97.1111 91.1445 98.3563 92.6016 97.894 94.3517C97.7749 94.8015 97.1255 95.1253 96.7015 94.8213C95.3377 93.8426 94.651 92.2919 93.494 91.1046C92.3031 89.8814 90.9841 88.7822 89.7898 87.5625C88.6603 86.4112 87.7692 85.107 87.0977 83.6714C86.8296 83.9575 86.4391 84.1607 85.8977 84.2399C84.9675 84.3748 84.1003 83.8477 83.6949 83.0688C83.4343 83.1803 83.1684 83.281 82.9003 83.3602C81.4901 83.7776 80.6028 82.261 81.1349 81.1403C81.4194 80.5395 81.7748 80.0178 82.2159 79.5788C80.8371 79.3953 79.4343 78.7063 78.5282 77.8464C76.2549 75.6859 75.9424 72.4388 76.454 69.5515C76.7256 68.0206 77.1943 66.4717 77.8028 65.0344C77.9087 64.7843 78.0224 64.5325 78.1468 64.2842C78.078 64.2824 78.0073 64.2536 77.9627 64.1979C77.5515 63.6546 77.0512 63.2103 76.7459 62.6022C76.465 62.0445 76.1526 61.4797 75.931 60.8986C75.4754 59.7095 75.2521 58.3675 75.1033 57.11C74.7963 54.5358 74.9152 51.9777 75.3228 49.4196C76.0166 45.0625 77.6925 40.8929 80.1615 37.2343C80.0271 37.1659 79.8983 37.0835 79.7782 36.986L79.7189 36.936L79.6226 36.8518C78.918 36.2353 78.9788 35.0798 79.6226 34.4554L79.8259 34.2584C80.0833 34.0111 80.3053 33.8151 80.7212 33.5459C80.7826 33.5061 80.8453 33.4687 80.9087 33.4338C80.691 33.0449 80.6155 32.5901 80.7671 32.0884C81.2955 30.3405 83.8964 30.4024 85.545 31.1646C87.3688 29.5907 89.3911 28.2244 91.5831 27.1181C96.8038 24.4844 102.707 22.6477 108.471 21.5252ZM81.4848 67.5601C82.4596 67.2525 83.7545 67.8983 84.6308 68.2869C85.7415 68.7798 86.6866 69.5083 87.602 70.2783C88.0578 70.6633 88.1395 71.2929 88.0262 71.8308C88.0148 71.8848 88.0038 71.9405 87.9906 71.9963C87.8697 72.5701 87.2074 73.0217 86.6213 73.0055C85.3953 72.9731 84.8113 71.9495 84.1171 71.0824C84.0355 71.2227 83.9331 71.3523 83.8064 71.4494L83.7209 71.5142C83.4329 71.7262 83.1154 71.8957 82.7348 71.8794C82.465 71.8668 82.2066 71.8002 81.9683 71.6797C81.3729 71.3756 81.1108 70.6309 81.2725 70.0246C81.3729 69.6433 81.6036 69.3446 81.905 69.1378L81.7927 69.0635C81.5523 68.9017 81.3331 68.7312 81.1622 68.4795L81.1236 68.42H81.1385C80.9525 68.1106 81.0736 67.6896 81.4848 67.5601Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M127.367 87.2614C126.017 87.6546 124.566 87.6898 123.189 87.2837C121.94 86.9153 120.658 86.1046 119.739 85.0319C118.922 84.079 118.393 82.921 118.414 81.6848C118.416 81.5437 118.466 81.4258 118.544 81.3344C118.627 81.2359 118.743 81.1683 118.867 81.1389C118.995 81.1087 119.131 81.1194 119.246 81.172C119.35 81.2197 119.44 81.3005 119.496 81.4187C119.637 81.6052 119.778 81.789 119.919 81.9676C121.055 83.3772 122.155 84.4306 123.863 84.8085C124.79 85.0135 125.715 84.9226 126.565 84.6098C127.474 84.2749 128.295 83.6861 128.939 82.9326C129.23 82.5921 129.574 82.4531 129.91 82.4508C130.291 82.4482 130.667 82.626 130.951 82.9101C131.229 83.1894 131.416 83.569 131.433 83.9661C131.448 84.3145 131.334 84.6786 131.033 85.0033C130.042 86.0731 128.758 86.8568 127.367 87.2614ZM127.326 69.6069C128.711 70.4529 130.821 72.4255 129.331 74.5227C127.577 76.3719 125.052 74.2516 123.808 73.2928C122.655 72.5496 121.358 74.4609 122.429 75.3287C131.419 82.0179 135.068 69.8281 128.026 68.6123C127.251 68.4783 126.963 69.3452 127.326 69.6069ZM114.371 65.8846C113.926 65.5985 113.402 65.5004 112.822 65.7657C112.369 65.9729 111.573 66.6638 111.02 67.5719C110.641 68.1933 110.373 68.9221 110.429 69.6814C110.442 69.8577 110.377 69.9877 110.274 70.0838C110.194 70.1597 110.077 70.2155 109.94 70.233C109.824 70.2478 109.694 70.2344 109.588 70.2012C109.386 70.138 109.28 70.0067 109.239 69.8996C108.852 68.8652 109.019 67.711 109.453 66.6697C110.039 65.2644 111.104 64.0873 111.801 63.7077C112.995 63.0581 114.403 63.0282 115.598 63.69C116.615 64.2533 117.251 65.1628 117.884 66.0898C118.019 66.2869 118.152 66.4825 118.29 66.6747C118.566 67.0597 118.594 67.4417 118.487 67.7692C118.368 68.132 118.066 68.4382 117.688 68.5984C117.338 68.7465 116.932 68.7674 116.573 68.6152C116.27 68.4866 115.992 68.236 115.816 67.8109C115.519 67.0948 115.025 66.3047 114.371 65.8846ZM136.977 67.4778C136.672 67.6374 136.434 67.6855 136.096 67.5837C135.909 67.5272 135.724 67.4191 135.579 67.2737C135.436 67.1295 135.332 66.9503 135.292 66.7515C135.193 66.2608 134.926 65.8015 134.545 65.5021C134.22 65.2462 133.809 65.1106 133.354 65.1871C132.862 65.2696 132.394 65.5864 132.071 65.9599C131.963 66.0849 131.879 66.2269 131.794 66.3679C131.635 66.6315 131.48 66.8766 131.261 67.0703C131.178 67.1439 131.053 67.195 130.932 67.195C130.882 67.195 130.832 67.1869 130.785 67.172C130.295 66.6785 130.201 66.3041 130.217 65.9328C130.234 65.5434 130.386 65.1491 130.633 64.7813C131.212 63.9184 132.312 63.2109 133.054 63.0507C134.07 62.8312 135.079 63.0947 135.888 63.665C136.72 64.2518 137.337 65.1629 137.53 66.1896C137.576 66.4369 137.556 66.7038 137.463 66.9353C137.371 67.1614 137.211 67.3551 136.977 67.4778ZM116.612 56.6848C116.002 57.2819 115.281 57.3743 114.55 57.4566C114.145 57.5027 113.821 57.5399 113.502 57.6122C112.626 57.8109 111.76 58.1102 110.971 58.5412C110.145 58.9917 109.245 59.5351 108.597 60.2313C108.444 60.3969 108.298 60.5707 108.153 60.7449C108.021 60.9038 107.893 61.0567 107.758 61.2041C107.604 61.3735 107.457 61.551 107.311 61.728C107.221 61.8774 107.203 61.9142 107.185 61.9524C107.158 62.0099 107.126 62.0742 107.09 62.1432C107.04 62.2377 106.982 62.3412 106.921 62.4349C106.819 62.6064 106.764 62.6536 106.717 62.6747C106.639 62.7097 106.565 62.7269 106.493 62.7176C106.426 62.7088 106.362 62.6763 106.3 62.623C105.987 62.3572 105.894 61.921 105.904 61.4579C105.918 60.7552 106.176 59.9772 106.414 59.499C106.967 58.3877 107.733 57.2325 108.655 56.4031C109.707 55.4563 110.858 54.7396 112.18 54.2457C113.001 53.9387 113.952 53.6569 114.847 53.6924C115.491 53.7181 116.106 53.9105 116.614 54.3911C116.926 54.6861 117.076 55.1057 117.076 55.525C117.076 55.9527 116.92 56.3829 116.612 56.6848ZM138.217 62.1521C138.178 62.2159 138.125 62.26 138.065 62.2864C138.002 62.3141 137.932 62.3221 137.865 62.3107C137.799 62.2994 137.735 62.269 137.685 62.2225C137.637 62.178 137.6 62.1189 137.583 62.0465C137.178 60.2596 136.392 58.9301 134.715 58.0728C133.889 57.651 132.94 57.3831 132.042 57.1694C131.781 57.1073 131.505 57.0671 131.227 57.0263C130.356 56.8986 129.479 56.7523 128.912 56.045C128.57 55.6189 128.426 55.074 128.507 54.5757C128.584 54.1065 128.856 53.6763 129.352 53.4185C130.587 52.777 132.121 53.4065 133.368 53.9427C133.461 53.9825 133.551 54.0216 133.64 54.0593C134.86 54.5765 135.972 55.2592 136.886 56.2356C137.611 57.0102 138.283 58.1553 138.554 59.3333C138.779 60.3133 138.726 61.3138 138.217 62.1521Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M130.342 86.5945C128.612 85.1155 126.674 82.1421 124.189 84.4948C123.574 85.1595 123.325 86.6498 122.386 86.9421C121.138 87.3307 119.901 86.0633 119.476 85.09C117.735 79.6821 124.929 78.1988 129.027 79.0724C131.029 79.8616 132.503 83.0382 132.593 84.696C132.65 85.8102 131.668 87.4484 130.342 86.5945ZM143.39 78.259C143.373 78.1872 143.35 78.1223 143.321 78.0633C142.556 77.7858 141.951 78.0688 141.577 78.5976C141.589 78.7289 141.63 78.8621 141.656 78.9924C141.367 79.576 141.107 80.2982 140.716 80.8025C140.639 80.8082 140.558 80.8003 140.482 80.7789C133.998 81.4289 137.163 74.9172 130.587 73.2998C125.503 72.4948 116.315 73.4169 113.917 78.4958C112.026 86.6081 102.409 80.9554 99.2515 76.7365C95.8825 72.897 93.7041 68.2051 91.6036 63.6523C91.1598 62.6888 89.7745 63.3778 89.9252 64.3023C87.9837 68.0406 88.0483 72.531 87.5675 76.6263C86.7496 84.7969 85.9527 96.2552 93.8617 101.244C104.166 112.424 129.899 116.369 141.784 106.097C145.898 97.6064 145.391 87.2482 143.39 78.259Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M138.77 55.7174C143.201 55.7174 145.73 56.6318 146.656 56.7031L146.684 56.705C147.069 56.7286 147.415 56.7596 147.778 56.8942C149.112 57.3871 149.329 58.7296 148.551 59.5757C148.496 61.3263 148.736 63.3719 148.324 65.1282C147.816 72.5323 144.188 73.7818 142.125 74.2379C141.09 74.4669 139.863 74.558 138.763 74.3163C136.886 74.2492 135.031 73.6854 133.444 72.7039C131.234 71.3357 129.592 69.2329 129.059 66.7373C128.807 65.5478 128.689 64.3096 128.826 63.1004L128.847 62.9338C128.128 62.604 127.296 62.5416 126.437 62.5125C126.027 62.4985 125.623 62.486 125.231 62.5027C124.847 62.5438 124.468 62.5986 124.087 62.6732C123.672 62.7934 123.28 62.9919 122.918 63.3062L122.893 63.765C122.825 64.911 122.668 66.0604 122.426 67.1848C122.069 68.8438 121.495 70.4282 120.273 71.605C119.859 72.198 119.347 72.7273 118.725 73.1857C116.467 74.854 113.4 75.4665 110.585 75.2358C104.869 74.7678 101.565 70.4137 100.804 68.5526L100.758 68.4398C100.208 67.0562 99.7702 65.261 98.0323 64.9637L97.6626 64.9C96.8696 64.7571 96.1378 64.5583 95.6728 63.8157C95.4689 63.4916 95.3641 63.129 95.3384 62.7594C95.0671 62.7794 94.7962 62.7985 94.5262 62.817C92.3726 63.2541 79.4551 63.6247 78.4241 63.6247C78.4241 63.6247 76.4421 64.4253 75.6053 63.805C75.0253 63.3737 74.8345 62.7989 75.1538 62.1476C75.6356 61.1678 77.8581 60.5784 78.845 60.3918C78.845 60.3918 94.771 60.5188 95.9173 60.3102C96.6265 59.6084 97.8951 59.7044 98.9552 59.5935C99.8327 58.993 101.06 58.5908 102.03 58.3216C102.228 58.2497 102.423 58.1802 102.614 58.1148C104.391 57.5072 106.239 57.1854 108.115 57.0126C110.05 56.8361 111.99 56.916 113.913 57.1688C114.724 57.2743 115.527 57.4108 116.324 57.5892C117.752 57.7698 119.171 58.0673 120.599 58.4202L120.885 58.4915C122.388 58.8699 123.934 59.1971 125.491 58.9406C126.758 58.7332 127.977 58.2651 129.145 57.759L129.297 57.6927C131.867 56.5669 135.879 55.7174 138.77 55.7174ZM116.169 59.8338C115.221 59.6337 114.817 61.0364 115.768 61.237C116.441 61.3791 117.012 61.705 117.397 62.2571L117.438 62.3172C117.956 63.1074 119.264 62.3779 118.743 61.5826C118.157 60.6876 117.246 60.0608 116.169 59.8338ZM143.936 58.9641C143.602 58.7382 143.096 58.9059 142.902 59.2251C142.688 59.5767 142.828 59.9681 143.141 60.1981L143.173 60.2205C143.46 60.4147 143.74 60.7628 143.775 61.1194L143.778 61.1641C143.816 62.0974 145.327 62.1022 145.289 61.1641C145.253 60.2463 144.699 59.4796 143.936 58.9641Z'
        fill='black'
      />
    </svg>
  )
}

export default LogoBeardedMan
