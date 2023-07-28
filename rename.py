import os

folder = "./edited-sounds"

for count, filename in enumerate(os.listdir(folder)):
  if filename[-3:] != "wav":
    break

  note = filename.split(".")[-2]

  # # new note format: octave | note | (b for flat)
  # new_fname = f"error_{note}.wav"
  # new_fname = note[-1] + note[0:-1].lower()

  src =f"{folder}/{filename}"  # foldername/filename, if .py file is outside folder

  dst =f"{folder}/{note}.wav"
    
  # # rename() function will
  # # rename all the files
  os.rename(src, dst)

  # print(dst)