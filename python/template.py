import time

def solvePuzzle(input):
  return 0

CORRECT_ANSWER = 0
INPUT = ""

startTime = time.time()
result = solvePuzzle(INPUT)
print('--- Puzzle result ---\n')
print(result)
print('Test success' if result == CORRECT_ANSWER else 'Test fail')
print('Run time: %s seconds' %(time.time() - startTime))
print('\n---------------------')
