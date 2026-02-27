def solution(sizes):
    widths = []
    heights = []
    
    for w, h in sizes:
        if w > h:
            widths.append(w)
            heights.append(h)
        else:
            widths.append(h)
            heights.append(w)
    
    return max(widths) * max(heights)